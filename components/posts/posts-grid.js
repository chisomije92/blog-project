import PostItem from "./post-item";
import classes from "./post-item.module.css";

const PostsGrid = ({ posts }) => {
  //   const {posts} = props;
  return (
    <ul>
      {posts.map((post) => (
        <PostItem key={post.id} />
      ))}
    </ul>
  );
};

export default PostsGrid;
