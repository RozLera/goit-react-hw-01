import clsx from "clsx";
import s from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <div className={s.wraper}>
        <img src={avatar} alt={name} width="48" />
        <p className={s.name}>{name}</p>
        <p className={clsx(s.status, isOnline ? s.online : s.offline)}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </div>
  );
}
