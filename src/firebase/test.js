import firebase from 'firebase/app';
import 'firebase/firebase';

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('2VP0OQTzlr3fZMhdNfxq')
  .collection('cartItems')
  .doc('jmDo3IZ1Wd3gp5dHzfVo');

// or we can write this as

firestore.doc('/users/2VP0OQTzlr3fZMhdNfxq/cartItems/jmDo3IZ1Wd3gp5dHzfVo');

// or

firestore.collection('/users/2VP0OQTzlr3fZMhdNfxq/cartItems');
