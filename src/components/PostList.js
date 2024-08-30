import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './PostList.css'; // Import the CSS file

class PostList extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div className="container mt-4 post-list-container">
        <h1 className="mb-4">Blog Posts</h1>
        <Link to="/create" className="btn btn-primary mb-3">
          <i className="fas fa-plus"></i> Create New Post
        </Link>
        <ul className="list-group">
          {posts.map(post => (
            <li key={post.id} className="list-group-item">
              <Link to={`/posts/${post.id}`} className="text-decoration-none text-dark">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;
