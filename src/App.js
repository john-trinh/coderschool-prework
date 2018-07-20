import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TweetBox from "./TweetBox";
import Tweet from "./Tweet";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [
        {
          text:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet consectetur adipisicing!",
          liked: false
        },
        {
          text: "hello afa!",
          liked: true
        },
        {
          text: "hello afsfswg!",
          liked: false
        }
      ]
    };
  }

  handleTweet(value) {
    if (value.trim().length === 0) {
      return;
    }
    let tweetObj = {
      text: value,
      liked: false
    };
    this.setState({
      tweets: this.state.tweets.concat(tweetObj)
    });
  }

  handleLike(tweet) {
    let tweets = this.state.tweets.map(t => {
      if (t.text === tweet.text) {
        return {
          text: t.text,
          liked: !t.liked
        };
      }
      return t;
    });

    this.setState({
      tweets
    });
  }

  handleDelete(tweet) {
    let tweets = this.state.tweets.filter(t => {
      if (t.text !== tweet.text) {
        return t;
      }
    });
    this.setState({
      tweets
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div class="content">
          <div class="service">
            <TweetBox onTweet={this.handleTweet.bind(this)} />
          </div>
          <div class="cards">
            {this.state.tweets.map(tweet => (
              <Tweet
                tweet={tweet}
                handleLike={this.handleLike.bind(this)}
                deleteTweet={this.handleDelete.bind(this)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
