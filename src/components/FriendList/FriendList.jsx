import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css";

export default function FriendList({ array }) {
  return (
    <div>
      <ul className={s.friendList}>
        {array.map(friend => (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
