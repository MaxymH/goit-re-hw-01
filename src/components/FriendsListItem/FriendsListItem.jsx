import PropTypes from "prop-types";

import s from './friendsListItem.module.css'

export default function FriendsItemList(props) {
    const {avatar , name, isOnline} =props
    return (
        <li className={s.item}>
            {isOnline ? <span className={s.online}></span> : <span className={s.offline}></span>}
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{name}</p>
        </li>
    )
}

FriendsItemList.prototype = {
    props: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    })
}