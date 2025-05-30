import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import userData from "./data/userData.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import "./App.css";

export default function App() {
  return (
    <>
      <Profile {...userData} />
      <FriendList array={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
