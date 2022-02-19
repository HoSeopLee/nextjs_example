import React from 'react';
import BlogMainPost from '../../components/BlogMainPost';
import BlogPostDetail from '../../components/BlogPostDetail';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SanityService from '../../services/SanityService';
import styles from '../../styles/Home.module.css';

const PostAll = ({ slug, post }) => {
  console.log(post);
  return (
    <div className={styles.container}>
      <Header />
      <BlogMainPost {...post} />
      <BlogPostDetail blocks={post.content} />
      <Footer />
    </div>
  );
};

export default PostAll;

export async function getStaticPaths() {
  const sanityService = new SanityService();

  const posts = await sanityService.getPosts();

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
  console.log('paths ::: ', paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const sanityService = new SanityService();

  const posts = await sanityService.getPosts();
  const post = posts.find((p) => p.slug === slug);
  return {
    props: {
      slug,
      post,
    },
  };
}
