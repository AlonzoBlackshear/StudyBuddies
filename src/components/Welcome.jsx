import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Welcome = () => {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };

  return (
    <main className="welcome">
      <h2>Welcome to StudyBuddies</h2>
      <p>Sign in with Google to connect with your classmates!</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;