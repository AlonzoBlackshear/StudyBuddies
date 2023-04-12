import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import React, { useEffect, useState } from "react";
import default_pic from "../img/default_pic.jpg";
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

          <span class="teamSize"> 2/4 teammates</span>

          <img class="profilePic" src= {default_pic} alt="user avatar"/>

          <div class="userDetails">
            <span class="userName"><strong>Steven Rodriguez</strong>  (srodriguez@umich.edu)</span>
            <p class="about">Hi, my name is Steven, and I am currently a senior. I am looking for more people to join my project group. I have a pretty flexible schedule this semester, so I can put in a decent amount of effort for this class. Let me know if interested!</p>
          </div>
          <div class="replyBox">
            <label for="my-textbox">Reply Here:</label>
            <input type="text" id="my-textbox" name="name"></input>
          </div>

        </div>


        <div class="openSearch">

          <span class="teamSize"> 3/4 teammates</span>

          <img class="profilePic" src= {default_pic} alt="user avatar"/>

          <div class="userDetails">
            <span class="userName"><strong>Sarah Mcsharlen</strong>  (smcsharlen@umich.edu)</span>
            <p class="about">Hi, I am currently a senior. We need one more person to join our group for this upcomming project so we can have an easier time splitting work. we're all Juniors and live of North campus to that's where we generally meet. Let me know if interested!</p>
          </div>
          <div class="replyBox">
            <label for="my-textbox">Reply Here:</label>
            <input type="text" id="my-textbox" name="name"></input>
          </div>
          
        </div>
    </main>
  );
};

export default TeamFinder;