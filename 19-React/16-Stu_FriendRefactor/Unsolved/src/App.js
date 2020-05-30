import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  state = {
    friends
  }

  removeFriendCard = (id) => {
    const newFriends = this.state.friends.filter(friend => friend.id !== id);
    this.setState({ friends: newFriends });
  }

  render() {
    return (
      <Wrapper>
        <h1 className="title">Friends List</h1>
        {this.state.friends.map(item => {
            return (<FriendCard
              id={item.id}
              name={item.name}
              image={item.image}
              occupation={item.occupation}
              location={item.location}
              removeHandler={this.removeFriendCard}
            />);
        })}
      </Wrapper>
    );
  }
}

export default App;
