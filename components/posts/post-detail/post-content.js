import ReactMarkdown from "react-markdown";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customImgRenderer = {
    p({ node, children }) {
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width="600"
              height="300"
            />
          </div>
        );
      }

      return <p>{children}</p>;
    },
    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          // eslint-disable-next-line react/no-children-prop
          children={children}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown
        components={customImgRenderer}
        // components={{
        //   p: ({ node, children }) => {
        //     if (node.children[0].tagName === "img") {
        //       const image = node.children[0];
        //       return (
        //         <div className="image">
        //           <Image
        //             src={`/images/posts/${post.slug}/${image.properties.src}`}
        //             alt={image.properties.alt}
        //             width="600"
        //             height="300"
        //           />
        //         </div>
        //       );
        //     }
        //     // Return default child if it's not an image
        //     return <p>{children}</p>;
        //   },
        // }}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
};
export default PostContent;
