// import useContext
import { useContext } from 'react';
// import realtime database from Firebase.
import { realTimeDb } from "../firebase";
// import uuid to generate id for users.
import { v4 as uuidv4 } from "uuid";
// import Context
import Context from '../Context';
import Header from './Header';
import firebase from 'firebase/compat/app'
import 'firebase/compat/database';


let FirebaseConfig = {
  apiKey: "AIzaSyA6H7Umx4PLVWPPzevyG3HU82Z9RrIlHeo",
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
  databaseURL: "https://bloblocor-f56ab-default-rtdb.firebaseio.com/",
  projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_FIREABSE_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
};

firebase.initializeApp(FirebaseConfig);


function UserProfile(props) {
    const { toggleModal } = props;
    const { user, setUser } = useContext(Context);
    

    const userProfile = () => {
        if(user) {

        }
        console.log(user);
}
return (
    <>
    <Header />
    <div className="user-profile">
      <div className="user-profile__info__content">
        <div className="user-profile__info__container">
          <div className="user-profile__info__title">
            Profile
            </div>
        </div>
        <div className="user-profile__info__subtitle"></div>
        <div className="user-profile__info__form">
       
              <img src={user.avatar} alt={user.email}/>
              <span>{user.email}</span>
              <span>{user.phone}</span>
              <span>{user.role}</span>
            </div>
          <button className="user-profile__info__btn user-profile__change-btn" onClick={() => toggleModal(false)}>
            
          </button>
          <button className="user-profile__info__btn">
          Edit 
          </button>
        </div>

        <div className="user-profile__ride__content">
        <div className="user-profile__ride__container">
          <div className="user-profile__ride__title">
            Rides
            </div>
        </div>
        <div className="user-profile__ride__subtitle"></div>
        {/* <div className="user-profile__ride__form">
       
              <img src={user.avatar} alt={user.email}/>
              <span>{user.email}</span>
              <span>{user.phone}</span>
              <span>{user.role}</span>
            </div> */}
        </div>

        <div className="user-profile__stat__content">
        <div className="user-profile__stat__container">
          <div className="user-profile__stat__title">
            Stats
            </div>
        </div>
        <div className="user-profile__stat__subtitle"></div>
        {/* <div className="user-profile__stat__form">
       
              <img src={user.avatar} alt={user.email}/>
              <span>{user.email}</span>
              <span>{user.phone}</span>
              <span>{user.role}</span>
            </div> */}
          
        </div>
      </div>
      </>
  );
}
export default UserProfile;