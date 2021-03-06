import React, { Component , mountNode } from 'react';
import ReactDOM from 'react-dom';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };

    fetch('http://localhost:3003/posts')
      .then(response => response.json())
      .then(posts => (this.setState({posts}))
      )} 
  render() {
    return (<div>
      Hello World
      <ul>
        {this.state.posts.map(post => <li>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>)}
      </ul>
    </div>);
  }
}

ReactDOM.render(
  <Posts />,
  mountNode
);