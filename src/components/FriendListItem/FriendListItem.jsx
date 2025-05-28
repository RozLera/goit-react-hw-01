import React from "react";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <div>
        <img src={avatar} alt={name} width="48" />
        <p>{name}</p>
        <p>{isOnline ? "Online" : "Offline"}</p>
      </div>
    </div>
  );
}
