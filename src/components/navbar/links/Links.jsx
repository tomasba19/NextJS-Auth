"use client";

import styles from "./Links.module.css";
import NavLink from "./navLink/navLink";

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

const Links = () => {
  //Temporary
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink item={link} key={link.title} />
      ))}
      {session ? (
        <>
          {isAdmin && (
            <NavLink item={{ title: "Admin", path: "/admin" }} key={"admin"} />
          )}

          <button className={styles.logout}>Logout</button>
        </>
      ) : (
        <NavLink item={{ title: "Login", path: "/login" }} key={"login"} />
      )}
    </div>
  );
};

export default Links;
