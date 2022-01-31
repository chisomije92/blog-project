import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "../../lib/posts.util";

const detailedPostsPage = ({ post }) => {
  return <PostContent post={post} />;
};
export const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postFiles = getPostFiles();
  const slugs = postFiles.map((postFile) => postFile.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: true,
  };
};
export default detailedPostsPage;
