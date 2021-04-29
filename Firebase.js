import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};

var firebaseConfig = {

};
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

export default firebase;
