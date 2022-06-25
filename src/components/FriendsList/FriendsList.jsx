import PropTypes from "prop-types";
import s from './friendsList.module.css'


export default function FriendsList(props) {
    const element = props.friends.map(data => {
        const { avatar, name, isOnline, id } = data

        return (
        <li key={id} className={s.item}>
            {isOnline ? <span className={s.online}></span> : <span className={s.offline}></span>}
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{name}</p>
        </li>)
    })
    return (
        <ul className={s.friend}>
            {element}
        </ul>
    )
}

FriendsList.propTypes = {
    props: PropTypes.object
}