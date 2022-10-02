import rerenderEntireTree from "../render";

let state = {
  profilePage: {
    postData: [
      { id: 1, message: "hi", likeCounts: 12, urlImg: "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"},
      { id: 2, message: "hello", likeCounts: 0, urlImg: "https://drasler.ru/wp-content/uploads/2019/05/%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D1%8D%D1%82%D0%BE-%D0%B2%D0%B0%D0%B6%D0%BD%D0%BE-%D0%B7%D0%BD%D0%B0%D1%82%D1%8C-023.jpg"},
      { id: 3, message: "kuku", likeCounts: 2, urlImg: "https://weblinks.ru/wp-content/uploads/2022/02/Krasivye-kartinki-leta-na-zastavku-telefona-1.jpg"}
    ],
    NewPostText: "ulalala"
  },
  dialogsPage: {
    dialogsData : [
      {id: 1, name: 'Dima', img: "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"},
      {id: 2, name: 'Nastya', img: "https://drasler.ru/wp-content/uploads/2019/05/%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D1%8D%D1%82%D0%BE-%D0%B2%D0%B0%D0%B6%D0%BD%D0%BE-%D0%B7%D0%BD%D0%B0%D1%82%D1%8C-023.jpg"},
      {id: 3, name: 'Kseniya', img: "https://weblinks.ru/wp-content/uploads/2022/02/Krasivye-kartinki-leta-na-zastavku-telefona-1.jpg"}
    ],
    messageData: [
      {id: 1, message: 'hi', img: "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"},
      {id: 2, message: 'hihu', img: "https://drasler.ru/wp-content/uploads/2019/05/%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D1%8D%D1%82%D0%BE-%D0%B2%D0%B0%D0%B6%D0%BD%D0%BE-%D0%B7%D0%BD%D0%B0%D1%82%D1%8C-023.jpg"},
      {id: 3, message: 'how are you?', img: "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"}
    ],
    NewMessageText: "ulalala"
  },
  navbarData: {
    friendsData: [
      {id: 1, name: 'Dima', img: "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"},
      {id: 2, name: 'Nastya', img: "https://drasler.ru/wp-content/uploads/2019/05/%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D1%8D%D1%82%D0%BE-%D0%B2%D0%B0%D0%B6%D0%BD%D0%BE-%D0%B7%D0%BD%D0%B0%D1%82%D1%8C-023.jpg"},
      {id: 3, name: 'Kseniya', img: "https://weblinks.ru/wp-content/uploads/2022/02/Krasivye-kartinki-leta-na-zastavku-telefona-1.jpg"}
    ]
  }
}

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.NewPostText,
    likeCounts: 0,
    urlImg: "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"
  }
  state.profilePage.postData.push(newPost);
  state.profilePage.NewPostText = '';
  rerenderEntireTree(state); // перерисовываем приложение после добавления данных\
}

export let updateNewPostText = (newText) => {
  state.profilePage.NewPostText = newText;
  rerenderEntireTree(state); // перерисовываем приложение после добавления данных
}

export let addMessage = () => {
  let newMessage = {
    id: 5,
    message: state.dialogsPage.NewMessageText,
    img: "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"
  }
  state.dialogsPage.messageData.push(newMessage);
  state.dialogsPage.NewMessageText = '';
  rerenderEntireTree(state); // перерисовываем приложение после добавления данных\
}

export let updateNewMessageText = (newText) => {
  state.dialogsPage.NewMessageText = newText;
  rerenderEntireTree(state); // перерисовываем приложение после добавления данных
}

export default state;