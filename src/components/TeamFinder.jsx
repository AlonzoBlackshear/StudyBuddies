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

const TeamFinder = (props) => {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };

  return (
    <main className="teamFinder">
        <h1>EECS 493 TEAM FINDER</h1>
        <h2>2 Open Searches:</h2>
        <div id="metaBackground">

          <span id="metaData"><strong>Team Size</strong>
          </span> 

          <span id="metaData"><strong>About</strong>
          </span>
        </div>

        <div class="openSearch">
          <span class="userName"><strong>David Adeyele</strong>  (dadeleye@umich.edu)</span>

          <p class="about">Hi, my name is David, and I am currently a senior. I am looking for a p3 group. 
          I have a pretty flexible schedule this semester, so I can put in a decent amount of effort for 
          this class. Let me know if interested!
          </p>
        </div>
    </main>
  );
};

export default TeamFinder;