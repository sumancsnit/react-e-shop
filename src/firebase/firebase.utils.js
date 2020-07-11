import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDtYViRUbftXjB3SiGUKculhB3iFkCx1oM',
  authDomain: 'e-shop-db-f9879.firebaseapp.com',
  databaseURL: 'https://e-shop-db-f9879.firebaseio.com',
  projectId: 'e-shop-db-f9879',
  storageBucket: 'e-shop-db-f9879.appspot.com',
  messagingSenderId: '165511975177',
  appId: '1:165511975177:web:a43f3b6035c7c9095cc3d8',
  measurementId: 'G-2SXLH2PXG1',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

// save data into firebase
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  // batch  to update data one by one
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    // create new doc ref, set id automatically
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj); // set data on newDocRef
  });

  // fire batch commits - save all data in firebase database
  return await batch.commit();
};

// get the data from firebse db anf modify it from array to objec with additional key: value,
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    // get the actual data
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()), // ex 'hats'
      id: doc.id,
      title,
      items,
    };
  });

  // change the array to object with key as title and value as object
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInwithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
