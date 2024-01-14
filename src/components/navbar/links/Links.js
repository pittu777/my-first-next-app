"use client";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { handleLogout } from "@/lib/action";



const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = ({session}) => {
  const [open, setopen] = useState(false)

  
  const isAdmin = true;

  return (
    <div className={styles.container}>

    <div className={styles.links}>
      {links.map((link) => {
        return <NavLink item={link} key={link.title}></NavLink>;
      })}
      {session?.user ? (
        <>
          {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
          <form action={handleLogout}>

          <button className={styles.logout}>logout</button>
          </form>
        </>
      ) : (
        <NavLink item={{ title: "Login", path: "/login" }} />
        )}
    </div>
    {/* <button className={styles.menuButton} onClick={()=>setopen((prev)=>!prev)}>menu</button> */}
    <img className={styles.menuButton} src="/menu.png" alt="" width={30} height={30} onClick={()=>setopen((prev)=>!prev)}/>{
      open && (
        <div className={styles.mobileLinks}>
          {links.map((link)=>{
            return <NavLink item={link} key={link.title}></NavLink>
          })}

        </div>
      )
    }
        </div>
  );
};
export default Links;
