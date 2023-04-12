import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, getDoc, doc, setDoc} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import HeaderBar from "./HeaderBar";
import TopNav from "./TopNav";
import default_pic from "../img/default_pic.jpg";


const FakeProfilePage1 = (props) => {
    const [user] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState(doc(db, "UserProfiles", "dnt2JV6sRuOUkIhWkU8Z"))
    const [edit, setEdit] = useState(false)
    const [ready, setReady] = useState(false)
    const [newYear, setNewYear] = useState("")
    const [newBio, setNewBio] = useState("")
    const [newSkills, setNewSkills] = useState("")

    const getUserInfo = async () => {
        const userRef = doc(db, "UserProfiles", user.uid);
        const userIn = await getDoc(userRef);
        if (!userIn.exists()) {
            console.log("DOes not exist!")
            await setDoc(userRef, {
            name: user.displayName,
            avatar: user.photoURL,
            uid: user.uid,
            bio: "Test User",
            year: "Senior",
            skills: ["Testing"]
            });
            userIn = await getDoc(userRef);
        }
        setUserInfo(userIn);
        setReady(true);
    };

    getUserInfo();

    

    
  return (
    <main className="fakeProfilePage">
        <div className="picname">
            <span id="picnamecontents">
                <img
                src={default_pic}
                alt="user avatar"
                />
                <span> Steven Rodriguez </span>
            </span>
        </div>
        {ready ? (!edit ? (
            <div className="profileFields">
                <span className="profileInput" id="yearInput">
                    <label>Year:</label>
                    <span className="profileText" id="yearText">Senior</span>
                </span>
                <span class="profileInput" id="bioInput">
                    <label>Bio:</label>
                    <span className="profileText" id="bioText">This is my last semester and I'm finishing strong!</span>
                </span>
                <span class="profileInput" id="skillsInput">
                    <label>Skills:</label>
                    <span className="profileText" id="skillsList">Testing, Quality Assurance, Juggling</span>
                </span>
                {/* <button onClick={() => setEdit(true)}> Edit Profile</button> */}
            </div>
        ) : (
            <div className="profileFields">
                <span className="profileInput" id="yearInput">
                    <label>Year:</label>
                    <span className="profileText" id="yearText">Senior</span>
                </span>
                <span class="profileInput" id="bioInput">
                    <label>Bio:</label>
                    <span className="profileText" id="bioText">This is my last semester and I'm finishing strong!</span>
                </span>
                <span class="profileInput" id="skillsInput">
                    <label>Skills:</label>
                    <span className="profileText" id="skillsList">Testing, Quality Assurance, Juggling</span>
                </span>
                {/* <button onClick={() => setEdit(true)}> Edit Profile</button> */}
            </div>
        )) : (
            <div className="profileFields">
                <span className="profileInput" id="yearInput">
                    <label>Year:</label>
                    <span className="profileText" id="yearText">Senior</span>
                </span>
                <span class="profileInput" id="bioInput">
                    <label>Bio:</label>
                    <span className="profileText" id="bioText">This is my last semester and I'm finishing strong!</span>
                </span>
                <span class="profileInput" id="skillsInput">
                    <label>Skills:</label>
                    <span className="profileText" id="skillsList">Testing, Quality Assurance, Juggling</span>
                </span>
                {/* <button onClick={() => setEdit(true)}> Edit Profile</button> */}
            </div>
        )}
        <div className="profileFields">

        </div>

    </main>
  );
};

export default FakeProfilePage1;