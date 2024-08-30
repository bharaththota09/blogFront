/*import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './PostDetail.css'; // Import the CSS file

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      loading: true
    };
  }

  componentDidMount() {
    const { id } = this.props.params;
    fetch(`http://localhost:5000/posts/${id}`)
      .then(response => response.json())
      .then(data => this.setState({ post: data, loading: false }))
      .catch(error => console.error('Error fetching post:', error));
  }

  handleDelete = () => {
    const { id } = this.props.params;
    fetch(`http://localhost:5000/posts/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      alert('Post deleted successfully!');
      this.props.onPostUpdate();
      this.props.navigate('/');
    })
    .catch(error => console.error('Error deleting post:', error));
  };

  render() {
    const { post, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!post) {
      return <div>Post not found</div>;
    }

    return (
      <div className="post-detail-container">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <div className="button-group">
          <Link to={`/edit/${post.id}`} className="btn btn-primary">
            <i className="fas fa-edit"></i> Edit
          </Link>
          <button onClick={this.handleDelete} className="btn btn-danger">
            <i className="fas fa-trash-alt"></i> Delete
          </button>
          <Link to="/" className="btn btn-secondary">
            <i className="fas fa-arrow-left"></i> Back to List
          </Link>
        </div>
      </div>
    );
  }
}

export default PostDetail;
*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './PostDetail.css'; // Import the CSS file

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      loading: true
    };
  }

  componentDidMount() {
    const { id } = this.props.params;
    fetch(`https://welcome-1ai2.onrender.com/posts/${id}`)
      .then(response => response.json())
      .then(data => this.setState({ post: data, loading: false }))
      .catch(error => console.error('Error fetching post:', error));
  }

  handleDelete = () => {
    const { id } = this.props.params;
    fetch(`https://welcome-1ai2.onrender.com/posts/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      alert('Post deleted successfully!');
      this.props.onPostUpdate();
      this.props.navigate('/');
    })
    .catch(error => console.error('Error deleting post:', error));
  };

  render() {
    const { post, loading } = this.state;

    if (loading) {
      return <div className="text-center mt-4"><i className="fas fa-spinner fa-spin"></i> Loading...</div>;
    }

    if (!post) {
      return <div className="text-center mt-4">Post not found</div>;
    }

    return (
      <div className="container mt-4">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p className="card-text">{post.content}</p>
            <div className="d-flex justify-content-start mt-3">
              <Link to={`/edit/${post.id}`} className="btn btn-outline-primary me-2">
                <i className="fas fa-edit"></i> Edit
              </Link>
              <button onClick={this.handleDelete} className="btn btn-danger me-2">
                <i className="fas fa-trash-alt"></i> Delete
              </button>
              <Link to="/" className="btn btn-outline-secondary">
                <i className="fas fa-arrow-left"></i> Back to List
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostDetail;
