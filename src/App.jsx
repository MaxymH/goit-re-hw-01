import User from "components/Profile";
import Statistics from "components/Statics";
import FriendsList from "components/FriendsList";
import TransactionHistory from "components/Transactions";


import dataUsers from './components/data/user.json';
import dataStatics from './components/data/statics.json';
import dataFriends from './components/data/friends.json';
import dataTransactions from './components/data/transactions.json'
export const App = () => {
  const { username, tag, location, avatar, stats } = dataUsers
  return (
    <div>
      <User
        avatarUrl={avatar}
        name={username}
        tag={tag}
        address={location}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={dataStatics} />
      <Statistics stats={dataStatics} />
      <FriendsList friends={dataFriends} />
      <TransactionHistory items={dataTransactions} />
    </div>
  );
};
