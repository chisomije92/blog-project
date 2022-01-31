import ReactMarkdown from "react-markdown";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";
const DUMMY_POST = {
  slug: "getting-started-nextsjs",
  title: "Getting Started with NextJs",
  image: "getting-started-nextjs.png",
  content: "# This is a first post",
  date: "2022-02-02",
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};
export default PostContent;
