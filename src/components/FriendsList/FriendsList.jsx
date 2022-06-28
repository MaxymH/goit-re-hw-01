import PropTypes from "prop-types";

import FriendsItemList from "components/FriendsListItem/FriendsListItem";


export default function FriendsList({friends}) {
    
    return (
        <ul >
            {friends.map(data => (
                <FriendsItemList
                    key={data.id}
                    avatar={data.avatar}
                    name={data.name}
                    isOnline={data.isOnline}
                />
            ))}
        </ul>
    )
}

FriendsList.defaultProps = {
    friends: [],
};

FriendsList.prototype = {
    friends: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.string.isRequired
    })
}