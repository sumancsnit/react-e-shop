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

  console.log('createUserProfileDocument -> userAuth', userAuth);
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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
