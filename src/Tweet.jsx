import React, { Component } from "react";
class Tweet extends Component {
  handleLike(tweet) {}

  render() {
    let tweet = this.props.tweet;
    return (
      <div class="tweet">
        <p>{tweet.text}</p>
        <a
          class="like-tweet"
          style={tweet.liked ? { color: "#5CB85C" } : { color: "#888" }}
          href="javascript:void(0)"
          onClick={() => this.props.handleLike(tweet)}
        >
          {tweet.liked ? "Liked" : "Like"}
        </a>
        <a
          class="delete-tweet"
          href="javascript:void(0)"
          onClick={() => this.props.deleteTweet(tweet)}
        >
          x
        </a>
      </div>
    );
  }
}
export default Tweet;
