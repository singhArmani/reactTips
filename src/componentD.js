import React from "react";
import { shape, arrayOf, string, number } from "prop-types";
import { map } from "lodash";

import ErrorLoadingComponent from "./errorLoadingComponent";
import LoadingComponent from "./loadingComponent";

export default class ComponentD extends React.PureComponent {
  state = {
    isLoading: true,
    posts: [],
    isErrorLoading: false,
    error: null
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        posts: [{ id: 1, author: "Malkeet", title: "My Dreams" }],
        isLoading: false
      });
    }, 1000);
  }

  // rendering logic handles by Blog (if statements) but the actual rendering job is handled by nested components
  render() {
    if (this.state.isLoading) {
      return <LoadingComponent />;
    }
    if (this.state.isErrorLoading) {
      return <ErrorLoadingComponent error={this.state.error} />;
    }

    return (
      <div>
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

// Posts component job is to render Posts

const Posts = props => {
  const posts = map(props.posts, post => {
    return <Post key={post.id} author={post.author} title={post.title} />;
  });

  return <ul>{posts}</ul>;
};

Posts.propTypes = {
  posts: arrayOf(
    shape({
      id: number.isRequired,
      author: string.isRequired,
      title: string
    })
  )
};

Posts.defaultProps = {
  posts: []
};

const Post = props => {
  return (
    <li>
      Author of book: <strong>{props.title}</strong> is {props.author}
    </li>
  );
};

Post.propTypes = {
  id: number,
  title: string,
  author: string
};

Post.defaultProps = {
  title: ""
};
