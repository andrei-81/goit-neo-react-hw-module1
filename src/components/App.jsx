import userData from "../jsonData/userData.json";
import friends from "../jsonData/friends.json";
import transactions from "../jsonData/transactions.json";
import Profile from "./Profile/Profile.jsx";
import FriendList from "./FriendList/FriendList.jsx";
import TransactionHistory from "./TransactionHistory/TransactionHistory.jsx";

const App = () => {
    console.log(userData.location)
    return (
      <>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} /> 
      </>
    );
  };

  export default App;