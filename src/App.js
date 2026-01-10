import Button from "./components/Button";
import FriendList from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import useFriends from "./hooks/useFriends";

export default function App() {
  const {
    friends,
    // setFriends,
    showAddFriend,
    // setShowAddFriend,
    selectedFriend,
    // setSelectedFriend,
    handleShowAddFriend,
    handleAddFriend,
    handleSelection,
    handleSplitBill,
  } = useFriends();

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <div>
        {selectedFriend && (
          <FormSplitBill
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
          />
        )}
      </div>
    </div>
  );
}
