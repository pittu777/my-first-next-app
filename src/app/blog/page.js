import React from "react";
import PostCard from "@/components/postCard.js/PostCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";
export const metadata = {
  title: "blog",
  description: "Generated by create next app",
};

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {next:{revalidate:3600}});

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};



const Blog = async () => {
  // const posts = await getPosts();
  const posts = await getData();

  return (
    <div className={styles.container}>
      {posts.map((post, userId)=>{
        return (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} />
          </div>
        )
      })}
    </div>
  );
};

export default Blog;
