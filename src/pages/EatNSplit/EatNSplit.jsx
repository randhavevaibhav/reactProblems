import { useState } from "react";

// components import
import MainLayout from "../../components/MainLayout/MainLayout";
import Container from "../../components/Container/Container";
// components import

import Button from "../../components/Buttton/Button";
import { friendList } from "./data";

const Friend = ({ friend, selectedFriend, handleSelectedFriend }) => {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li
      className={`grid grid-cols-[4.8rem_1fr_auto] gap-2 items-center border rounded-lg p-2 ${
        isSelected ? "bg-gray-300" : ""
      }`}
    >
      <img
        className="w-20 h-20 object-cover rounded-full"
        src={friend.img}
        alt="friend image"
      />
      <div>
        <h3 className="font-bold">{friend.name}</h3>
        {friend.balance === 0 && <p>You and {friend.name} are even.</p>}
        {friend.balance > 0 && (
          <p className="text-green-500">
            {friend.name} Owes you ${friend.balance}.
          </p>
        )}
        {friend.balance < 0 && (
          <p className="text-red-500">
            You Owe {friend.name} ${friend.balance}.
          </p>
        )}
      </div>
      <Button
        variant="Secondary"
        animated={true}
        onClick={() => handleSelectedFriend(friend)}
      >
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
};

const FriendList = ({ friends, selectedFriend, handleSelectedFriend }) => {
  return (
    <ul className="flex flex-col gap-2 max-h-[25rem] overflow-auto">
      {friends.map((friend, i) => {
        return (
          <Friend
            friend={friend}
            key={i}
            handleSelectedFriend={handleSelectedFriend}
            selectedFriend={selectedFriend}
          />
        );
      })}
    </ul>
  );
};

const FormAddFriend = ({ handleAddFriend }) => {
  const baseURL = "https://i.pravatar.cc/48?u=";
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id: id,
      name,
      balance: 0,
      img: baseURL + id,
    };

    //reset form field
    setName("");
    setImage("");
    handleAddFriend(newFriend);
    console.log(newFriend);
  };
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <input
        className="pl-4 p-2 border rounded-md"
        type="text"
        placeholder="enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="pl-4 p-2 border rounded-md"
        type="text"
        placeholder="enter image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <div>
        <Button variant="Secondary" type="submit">
          Add
        </Button>
      </div>
    </form>
  );
};

const FormSplitBill = ({ selectedFriend }) => {
  const [bill, setBill] = useState(0);
  const [paidByUser, setPaidByUser] = useState(0);
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend = bill && paidByUser ? bill - paidByUser : "";
  const disableUserInput = bill ? false : true;
  return (
    <>
      <h2 className="font-bold text-3xl">
        SPLIT THE BILL WITH {selectedFriend.name}
      </h2>
      <form className="border flex flex-col gap-2 p-8">
        <div className="flex justify-between">
          <label htmlFor="bill_amount" className="font-bold text-xl">
            Bill amount:
          </label>
          <input
            type="number"
            name="bill_amount"
            id="bill_amount"
            className="pl-4 p-2 border rounded-md text-center"
            placeholder="Enter bill"
            value={bill}
            onChange={(e) => {
              setPaidByUser(0);

              setBill(Number(e.target.value));
            }}
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="user_expenses" className="font-bold text-xl">
            Your expense:
          </label>
          <input
            type="number"
            name="user_expenses"
            id="user_expenses"
            disabled={disableUserInput}
            className="pl-4 p-2 border rounded-md text-center"
            placeholder="Enter your expenses"
            value={paidByUser}
            onChange={(e) =>
              setPaidByUser(
                Number(e.target.value) > bill
                  ? paidByUser
                  : Number(e.target.value)
              )
            }
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="friend_expenses" className="font-bold text-xl">
            {selectedFriend.name}'s expense:
          </label>
          <input
            type="number"
            name="friend_expenses"
            disabled
            id="friend_expenses"
            className="pl-4 p-2 border rounded-md text-center"
            value={paidByFriend}
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="bill_select" className="font-bold text-xl">
            Who's paying the bill:
          </label>
          <select
            name="bill_select"
            className="px-4 py-2 border rounded-md"
            id="bill_select"
            value={whoIsPaying}
            onChange={(e) => setWhoIsPaying(e.target.value)}
          >
            <option value="user">You</option>
            <option value="friend">{selectedFriend.name} </option>
          </select>
        </div>
        <div className="flex justify-end">
          <Button>Split Bill</Button>
        </div>
      </form>
    </>
  );
};

const EatNSplit = () => {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(friendList);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleShowAddFriend = () => {
    setShowAddFriend((showAddFriend) => !showAddFriend);
  };

  const handleAddFriend = (friend) => {
    setFriends((friendList) => [...friendList, friend]);
    setShowAddFriend(false);
  };

  const handleSelectedFriend = (friend) => {
    setSelectedFriend((currentFriend) =>
      currentFriend?.id === friend.id ? null : friend
    );
    setShowAddFriend(false);
  };
  return (
    <MainLayout>
      <Container tailwindClasses={["rounded-md"]}>
        <div className="main grid grid-cols-[30rem_1fr] gap-2">
          <div className="flex flex-col gap-2">
            <div className="friend_list border p-2 ">
              <FriendList
                friends={friends}
                selectedFriend={selectedFriend}
                handleSelectedFriend={handleSelectedFriend}
              />
            </div>
            <div className="flex flex-col gap-2 add_friend_form border p-2">
              {showAddFriend ? (
                <FormAddFriend handleAddFriend={handleAddFriend} />
              ) : null}
              <div>
                <Button variant="Success" onClick={() => handleShowAddFriend()}>
                  {showAddFriend ? "Close" : "Add Friend"}
                </Button>
              </div>
            </div>
          </div>

          <div className="split_bill_form border p-2">
            {selectedFriend && (
              <FormSplitBill selectedFriend={selectedFriend} />
            )}
          </div>
        </div>
      </Container>
    </MainLayout>
  );
};

export default EatNSplit;
