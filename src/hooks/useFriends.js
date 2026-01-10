import { useState } from "react";
import { initialFriends } from "../data";

export default function useFriends() {
  const [friends, setFriends] = useState(initialFriends); // lifting up state
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    // Set new array to add new friend
    // Using (...) spread operator, because react variable is immutable
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    // When friend selected the data of it will display in split bill form & Lifting up state
    //setSelectedFriend(friend);
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    console.log(value);
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return {
    friends,
    setFriends,
    showAddFriend,
    setShowAddFriend,
    selectedFriend,
    setSelectedFriend,
    handleShowAddFriend,
    handleAddFriend,
    handleSelection,
    handleSplitBill,
  };
}
