import PropTypes from "prop-types";

import FriendsItemList from "components/FriendsListItem/FriendsListItem";


export default function FriendsList(props) {
    const element = props.friends.map(data => {
        const { avatar, name, isOnline, id } = data

        return (
            <FriendsItemList
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}

            />
        )
    })
    return (
        <ul >
            {element}
        </ul>
    )
}

FriendsList.defaultProps = {
    friends: [],
};

FriendsList.prototype = {
    props: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.string.isRequired
    })
}