import PostItem from "./post-item";
import classes from "./post-item.module.css";

const PostsGrid = ({ posts }) => {
  //   const {posts} = props;
  return (
    <ul>
      {posts.map((post) => (
        <PostItem />
      ))}
    </ul>
  );
};

export default PostsGrid;
