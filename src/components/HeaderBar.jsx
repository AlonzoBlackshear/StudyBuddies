import React, { useState } from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const HeaderBar = (props) => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className="header-bar">
      <h1 onClick={() => props.onPageSwitch("homepage")}>StudyBuddies</h1>
      <div className="tab-container">
        <div className="tab" onClick={() => props.onPageSwitch("homepage")}>
          Classes
        </div>
        <div className="tab" onClick={() => props.onPageSwitch("groupchat")}>
          Chat
        </div>
        <div className="tab" onClick={() => props.onPageSwitch("teamfinder")}>
          Team Finder
        </div>
        <div className="tab" onClick={() => props.onPageSwitch("profilepage")}>
          My Profile
        </div>
      </div>
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
        <button className="sign-in">
          <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt="sign in with google"
            type="button"
          />
        </button>
      )}
    </nav>
  );
};

export default HeaderBar;
