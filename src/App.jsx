import userData from "./data/userData.json";
import friends from "./data/friends.json";

import Profile from "./components/Profile/Profile";
import "./App.css";
import FriendList from "./components/FriendList/FriendList";

export default function App() {
  return (
    <>
      <Profile {...userData} />
      <FriendList array={friends} />
    </>
  );
}
