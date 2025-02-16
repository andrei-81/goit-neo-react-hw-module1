import css from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
    <div className={css.friendItem}>
      <img className={css.image} src={avatar} alt="Avatar" />
      <p className={css.name}>{name}</p>
      <p className={css.status} style={{ color: isOnline ? 'green' : 'red' }}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
);

export default FriendListItem;