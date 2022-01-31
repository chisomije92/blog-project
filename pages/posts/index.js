import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-nextsjs",
    title: "Getting Started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is the framework for production for fullstack React app and sites and also ships with server-side rendering",
    date: "2022-02-02",
  },
  {
    slug: "getting-started-nextsjs-2",
    title: "Getting Started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is the framework for production for fullstack React app and sites and also ships with server-side rendering",
    date: "2022-02-02",
  },
  {
    slug: "getting-started-nextsjs-3",
    title: "Getting Started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is the framework for production for fullstack React app and sites and also ships with server-side rendering",
    date: "2022-02-02",
  },
  {
    slug: "getting-started-nextsjs-4",
    title: "Getting Started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is the framework for production for fullstack React app and sites and also ships with server-side rendering",
    date: "2022-02-02",
  },
];

const allPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default allPostsPage;
