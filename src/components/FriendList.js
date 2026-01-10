import Friend from "./Friend";

export default function FriendList({ friends, onSelection, selectedFriend }) {
  // Lifting up state
  //const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}
