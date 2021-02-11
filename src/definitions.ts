import {
	GoogleAuthProvider,
	FacebookAuthProvider,
	TwitterAuthProvider,
	PhoneAuthProvider,
} from '@firebase/auth-types';
import 'firebase/auth';

declare module "@capacitor/core" {
  interface PluginRegistry {
    CapacitorFirebaseAuth?: CapacitorFirebaseAuthPlugin;
  }
}

export interface CapacitorFirebaseAuthPlugin {
  signIn(options: {providerId: string, data?: SignInOptions}): Promise<SignInResult>;
  signOut(options: {}): Promise<void>;
}

export class GoogleSignInResult{
  providerId = GoogleAuthProvider.PROVIDER_ID;
  constructor(public idToken: string) {
  }
}

export class TwitterSignInResult {
  providerId = TwitterAuthProvider.PROVIDER_ID;
  constructor(public idToken: string, public secret: string) {
  }
}

export class FacebookSignInResult {
  providerId = FacebookAuthProvider.PROVIDER_ID;
  constructor(public idToken: string) {
  }
}

export class PhoneSignInResult {
  providerId = PhoneAuthProvider.PROVIDER_ID;
  constructor(public verificationId: string, public verificationCode: string) {
  }
}

export type SignInResult = GoogleSignInResult | TwitterSignInResult | FacebookSignInResult | PhoneSignInResult;

export interface PhoneSignInOptions {
  phone: string,
  verificationCode?: string
}

export type SignInOptions = PhoneSignInOptions;
