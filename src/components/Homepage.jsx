import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import React, { useEffect, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";
import HeaderBar from "./HeaderBar";
import TopNav from "./TopNav";

const Homepage = (props) => {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };

  return (
    <main className="homePage">
        <div class="classBox" id="E493" onClick={() => props.onPageSwitch('groupchat')}>
            <span>EECS 493</span>
        </div>
    </main>
  );
};

export default Homepage;