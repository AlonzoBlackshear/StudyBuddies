import React, { useState } from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const TopNav = (props) => {
    const [user] = useAuthState(auth);

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
      };
      const signOut = () => {
        auth.signOut();
      };

    if (props.curPage === "groupchat")
        return (
        <nav className="topnav-bar">
            <img
                className="chat-bubble__left"
                src={user.photoURL}
                alt="user avatar"
                onClick={() => props.onPageSwitch('profilepage')}
            />
            <h1>University of Michigan - Ann Arbor</h1>
            <button className="swapPage" onClick={() => props.onPageSwitch('teamfinder')}> TeamFinder </button>
        </nav>
        );
    else if (props.curPage === "teamfinder")
        return (
        <nav className="topnav-bar">
            <img
                className="chat-bubble__left"
                src={user.photoURL}
                alt="user avatar"
            />
            <h1>University of Michigan - Ann Arbor</h1>
            <button className="swapPage" onClick={() => props.onPageSwitch('groupchat')}> Class Chat </button>
        </nav>
        );
  return (
    <nav className="topnav-bar">
      <h1>University of Michigan - Ann Arbor</h1>
      
    </nav>
  );
};

export default TopNav;