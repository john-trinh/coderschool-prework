import React, { Component } from "react";

class TweetBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      charsRemaining: 140
    };
  }

  handleChange(value) {
    this.setState({
      text: value,
      charsRemaining: 140 - value.length
    });
  }

  render() {
    return (
      <div className="tweetbox">
        <input type="text" onChange={e => this.handleChange(e.target.value)}/>
        <button
          onClick={() => this.props.onTweet(this.state.text)}
          disabled={this.state.charsRemaining < 0}
        >
          Tweet
        </button>
        <p>{this.state.charsRemaining}</p>
      </div>
    );
  }
}

export default TweetBox;
