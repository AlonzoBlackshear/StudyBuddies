import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, getDoc, doc, setDoc} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import HeaderBar from "./HeaderBar";
import TopNav from "./TopNav";


const ProfilePage = (props) => {
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
    <main className="profilePage">
        <div className="picname">
            <span id="picnamecontents">
                <img
                src={user.photoURL}
                alt="user avatar"
                />
                <span> {user.displayName} </span>
            </span>
        </div>
        {ready ? (!edit ? (
            <div className="profileFields">
                <span className="profileInput" id="yearInput">
                    <label>Year:</label>
                    <span className="profileText" id="yearText">{userInfo.data().year}</span>
                </span>
                <span class="profileInput" id="bioInput">
                    <label>Bio:</label>
                    <span className="profileText" id="bioText">{userInfo.data().bio}</span>
                </span>
                <span class="profileInput" id="skillsInput">
                    <label>Skills:</label>
                    <span className="profileText" id="skillsList">{userInfo.data().skills}</span>
                </span>
                <button onClick={() => setEdit(true)}> Edit Profile</button>
            </div>
        ) : (
            <form>
                <div className="profileFields">
                    <span className="profileInput" id="yearInput">
                        <label>Year:</label>
                        <input type="text" defaultValue={userInfo.data().year}/>
                    </span>
                    <span className="profileInput" id="bioInput">
                        <label>Bio:</label>
                        <input type="text" defaultValue={userInfo.data().bio}/>
                    </span>
                    <span className="profileInput" id="skillsInput">
                        <label>Skills:</label>
                        <input type="text" defaultValue={userInfo.data().skills}/>
                    </span>
                    <span>
                        <button onClick={() => setEdit(false)}> Discard Changes</button>
                        <button type="submit" onClick={() => setEdit(false)}> Save Changes</button>
                    </span>
                </div>
            </form>
        )) : (
            <form>
                <div className="profileFields">
                    <span className="profileInput" id="yearInput">
                        <label>Year:</label>
                       
                    </span>
                    <span className="profileInput" id="bioInput">
                        <label>Bio:</label>
                        <h5>HIIII</h5>
                    </span>
                    <span className="profileInput" id="skillsInput">
                        <label>Skills:</label>
                        
                    </span>
                </div>
            </form>
        )}
        <div className="profileFields">

        </div>

    </main>
  );
};

export default ProfilePage;