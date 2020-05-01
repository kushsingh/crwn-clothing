import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAaaM60KJ7CWGNywWv1OVZVAiLCX9_QB-Q",
    authDomain: "crwn-db-f6cfd.firebaseapp.com",
    databaseURL: "https://crwn-db-f6cfd.firebaseio.com",
    projectId: "crwn-db-f6cfd",
    storageBucket: "crwn-db-f6cfd.appspot.com",
    messagingSenderId: "695471235997",
    appId: "1:695471235997:web:84b50c24761828ad12c574",
    measurementId: "G-VKKRWN5LRR"
}

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const usreRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await usreRef.get();

    if( !snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await usreRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData 
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return usreRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
