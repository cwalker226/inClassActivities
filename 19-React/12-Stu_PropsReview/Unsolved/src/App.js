import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";

function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      {friends.map(item => {
        return (<FriendCard name={item.name} imageURL={item.image} occupation={item.occupation} location={item.location}/>);
      })}
    </Wrapper>
  );
}

export default App;
