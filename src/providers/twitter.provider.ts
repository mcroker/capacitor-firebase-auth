import { firebase } from '@firebase/app';
import 'firebase/auth';
import { TwitterAuthProvider, OAuthCredential } from '@firebase/auth-types';
import { SignInOptions, TwitterSignInResult } from '../definitions';

export const twitterSignInWeb: (options: { providerId: string, data?: SignInOptions }) => Promise<TwitterSignInResult>
    = async () => {

        try {
            const provider = new TwitterAuthProvider();
            firebase.auth().useDeviceLanguage();

            const userCredential = await firebase.auth().signInWithPopup(provider);

            const { credential }: { credential: OAuthCredential; } = userCredential;
            return new TwitterSignInResult(credential.accessToken, credential.secret);
        } catch (e) {
            return Promise.reject(e);
        }

    }
