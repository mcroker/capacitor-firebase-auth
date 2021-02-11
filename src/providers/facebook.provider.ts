import { firebase } from '@firebase/app';
import 'firebase/auth';
import { FacebookAuthProvider, OAuthCredential } from '@firebase/auth-types';
import { FacebookSignInResult, SignInOptions } from '../definitions';

export const facebookSignInWeb: (options: { providerId: string, data?: SignInOptions }) => Promise<FacebookSignInResult>
    = async () => {
        const provider = new FacebookAuthProvider();
        firebase.auth().useDeviceLanguage();

        const userCredential = await firebase.auth().signInWithPopup(provider);

        const { credential }: { credential: OAuthCredential; } = userCredential;
        return new FacebookSignInResult(credential.accessToken);
    }
