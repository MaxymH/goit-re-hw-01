import PropTypes from "prop-types";
import s from './profile.module.css'
export default  function User(props) {
    const {avatarUrl, name, tag , address, stats } = props
    return (
        <div className={s.profile}>
    <div className={s.description}>
    <img
        src={avatarUrl}
        alt={name}
        className={s.avatar}
    />
    <p className={s.name}>{name}</p>
    <p className={s.tag}>@{tag}</p>
    <p className={s.location}>{address}</p>
    </div>

    <ul className={s.stats}>
    <li className={s.items}>
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
    </li>
    <li className={s.items}>
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
    </li>
    <li className={s.items}>
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
    </li>
    </ul>
</div>
    )
};

User.propTypes = {
    address: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired

}