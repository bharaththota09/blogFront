import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './PostForm.css'; // Import the CSS file

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      isEdit: false
    };
  }

  componentDidMount() {
    const { id } = this.props.params;
    if (id) {
      // Fetch post data if in edit mode
      fetch(`https://welcome-1ai2.onrender.com/posts/${id}`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            title: data.title,
            content: data.content,
            isEdit: true
          });
        })
        .catch(error => console.error('Error fetching post:', error));
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, content, isEdit } = this.state;
    const { id } = this.props.params;

    if (isEdit) {
      // Update existing post
      fetch(`https://welcome-1ai2.onrender.com/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content })
      })
      .then(response => response.json())
      .then(() => {
        alert('Post updated successfully!');
        this.props.onPostUpdate();
        this.props.navigate('/');
      })
      .catch(error => console.error('Error updating post:', error));
    } else {
      // Create new post
      fetch('https://welcome-1ai2.onrender.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content })
      })
      .then(response => response.json())
      .then(() => {
        alert('Post created successfully!');
        this.props.onPostUpdate();
        this.props.navigate('/');
      })
      .catch(error => console.error('Error creating post:', error));
    }
  };

  render() {
    const { title, content } = this.state;

    return (
      <div className="post-form-container">
        <h3>
          <i className={`fas ${this.state.isEdit ? 'fa-edit' : 'fa-plus-circle'}`}></i>
          {this.state.isEdit ? ' Edit Post' : ' Create New Post'}
        </h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              <i className="fas fa-heading"></i> Title
            </label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={title}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>
              <i className="fas fa-file-alt"></i> Content
            </label>
            <textarea
              name="content"
              className="form-control"
              value={content}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            <i className={`fas ${this.state.isEdit ? 'fa-save' : 'fa-plus'}`}></i>
            {this.state.isEdit ? ' Update Post' : ' Create Post'}
          </button>
        </form>
      </div>
    );
  }
}

export default PostForm;
