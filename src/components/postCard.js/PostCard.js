import React from 'react'
import Image from 'next/image'
import styles from "./post.module.css"
import Link from 'next/link'
function PostCard({post}) {
  return (
    
    <div className={styles.container}>
     <div className={styles.top}>
        {post.img && <div className={styles.imgContainer}>
      <Image src={post.img} alt="" fill className={styles.img}></Image>
        </div>}
        <span className={styles.date}>12122024</span>
     </div>
     <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link href={`/blog/${post.slug}`}>read more</Link>
     </div>
    </div>
  )
}

export default PostCard
