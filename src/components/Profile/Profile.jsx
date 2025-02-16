import css from './Profile.module.css'

const Profile = ({name, tag, location, image, stats}) => (
    <div className={css.card}>
        <div className={css.profile}>
            <img className={css.image} src={image} alt="User avatar" />
            <div className={css.profileInfo}>
                <h2 className={css.name}>{name}</h2>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>
            <div className={css.profileStats}>
                {Object.entries(stats).map(([label, value]) => (
                    <div key={label} className={css.statElement}>
                        <span className={css.label}>{label.charAt(0).toUpperCase() + label.slice(1)}</span>
                        <span className={css.quantity}>{value}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
)

export default Profile;

