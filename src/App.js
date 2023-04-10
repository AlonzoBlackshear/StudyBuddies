import "./App.css";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";
import { useState } from "react";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import HeaderBar from "./components/HeaderBar";
import Homepage from "./components/Homepage";
import TopNav from "./components/TopNav";
import TeamFinder from "./components/TeamFinder";
import ProfilePage from "./components/ProfilePage";
import WelcomeHeader from "./components/WelcomeHeader";

function App() {
  const [user] = useAuthState(auth);
  const [currentPage, setCurrentPage] = useState('homepage');
  const togglePage = (pageName) => {
    setCurrentPage(pageName);
  }

  if (!user)
    return (
      <div className="App">
        <WelcomeHeader/>
        <Welcome />
    </div>
    )
    if (currentPage === 'homepage')
    return (
    <div className='App'> 
      <HeaderBar onPageSwitch={togglePage}/>
      <TopNav curPage={currentPage} onPageSwitch={togglePage}/>
      <Homepage onPageSwitch={togglePage}/>
    </div>
    )
  else if (currentPage === 'profilepage')
    return (
      <div className='App'> 
      <HeaderBar onPageSwitch={togglePage}/>
      <ProfilePage onPageSwitch={togglePage}/>
      </div>
    )
  else if (currentPage === 'groupchat')
    return (
      <div className='App'> 
      <HeaderBar onPageSwitch={togglePage}/>
      <TopNav curPage={currentPage} onPageSwitch={togglePage}>
      </TopNav>
      <ChatBox onPageSwitch={togglePage}/>
      </div>
    )
  else if (currentPage === 'teamfinder')
      return (
        <div className='App'> 
      <HeaderBar onPageSwitch={togglePage}/>
      <TopNav curPage={currentPage} onPageSwitch={togglePage}>
      </TopNav>
      <TeamFinder onPageSwitch={togglePage}/>
      </div>
      )
  return (
    <div className='App'> 
      <HeaderBar onPageSwitch={togglePage}/>
      
      </div>
  );

}

export default App;