import FriendListItem from "./FriendListItem.jsx";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => (
    <>
        <ul className={css.list}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <li key={id} className={css.item}>
                    <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
                </li>
            ))}
        </ul>
    </>
);

export default FriendList;