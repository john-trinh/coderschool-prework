import React, { Component } from "react";
class Tweet extends Component {
  handleLike(tweet) {

  }

  render() {
    let tweet = this.props.tweet;
    return (
      <div>
        {tweet.text}
        <br />
        <a href="#" onClick={() => this.props.handleLike(tweet)}>{tweet.liked ? 'Unlike' : 'Like'} Post</a>
        <a href="#" onClick={() => this.props.deleteTweet(tweet)}>Delete</a>
      </div>
    );
  }
}
export default Tweet;
