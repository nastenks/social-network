import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App 
        dialogsData={state.dialogsPage.dialogsData} 
        messageData={state.dialogsPage.messageData} 
        postData={state.profilePage.postData} 
        friendsData={state.navbarData.friendsData} 
        addPost={addPost}
        NewPostText={state.profilePage.NewPostText}
        updateNewPostText={updateNewPostText}
      />
    </React.StrictMode>
  );
}

export default rerenderEntireTree;
