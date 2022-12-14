import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar friendsData={props.friendsData} />
        <div className="content">
          <Routes>
            <Route 
              path="/profile" 
              element=
                {<Profile 
                  postData={props.postData}
                  addPost={props.addPost}  
                  NewPostText={props.NewPostText}
                  updateNewPostText={props.updateNewPostText}
                />} 
            />
            <Route 
              path="/dialogs" 
              element=
                {<Dialogs 
                  dialogsData={props.dialogsData} 
                  messageData={props.messageData} 
                  addMessage={props.addMessage}
                  updateNewMessageText={props.updateNewMessageText}
                />} 
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
