import Head from "next/head";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts.util";

const homePage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Chisom`s Blog</title>
        <meta
          name="description"
          content="I write on programming and related topics"
        />
      </Head>
      <>
        <Hero />
        <FeaturedPosts posts={posts} />
      </>
    </>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default homePage;
