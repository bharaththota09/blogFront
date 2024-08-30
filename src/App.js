import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams, useNavigate } from 'react-router-dom';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import PostForm from './components/PostForm';
import './styles.css'; // Import custom styles


function PostDetailWrapper(props) {
  const params = useParams();
  const navigate = useNavigate();
  return <PostDetail params={params} navigate={navigate} {...props} />;
}

function PostFormWrapper(props) {
  const params = useParams();
  const navigate = useNavigate();
  return <PostForm params={params} navigate={navigate} {...props} />;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true
    };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    fetch('https://welcome-1ai2.onrender.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data, loading: false }))
      .catch(error => console.error('Error fetching posts:', error));
  };

  handlePostUpdate = () => {
    this.fetchPosts();
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<PostList posts={this.state.posts} />} />
            <Route path="/posts/:id" element={<PostDetailWrapper onPostUpdate={this.handlePostUpdate} />} />
            <Route path="/create" element={<PostFormWrapper onPostUpdate={this.handlePostUpdate} />} />
            <Route path="/edit/:id" element={<PostFormWrapper onPostUpdate={this.handlePostUpdate} />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
