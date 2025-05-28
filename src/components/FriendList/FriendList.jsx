import React from "react";

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(item => (
        <li key={item.id}>
          <FriendListItem
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
