import { firebase } from '@firebase/app';
import 'firebase/auth';
import { GoogleAuthProvider, OAuthCredential } from '@firebase/auth-types';
import {GoogleSignInResult, SignInOptions} from '../definitions';

export const googleSignInWeb: (options: {providerId: string, data?: SignInOptions}) => Promise<GoogleSignInResult>
    = async () => {
        try {

            const provider = new GoogleAuthProvider();
            firebase.auth().useDeviceLanguage();

            const userCredential = await firebase.auth().signInWithPopup(provider);

            const {credential}: { credential: OAuthCredential } = userCredential;
            return new GoogleSignInResult(credential.idToken);

        } catch (e) {
            return Promise.reject(e);
        }
    }
