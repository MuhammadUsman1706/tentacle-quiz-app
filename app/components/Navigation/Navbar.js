import React from "react";
import classes from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className={classes.navbar}>
      <div className={classes.heading}>
        <Link href='/'>
          <h1>New Quiz App</h1>
        </Link>
      </div>
      <div className={classes.routes}>
        <ul>
          <li>
            <Link href='/subject/entertainment'>Entertainment</Link>
          </li>
          <li>
            <Link href='/subject/arts-and-literature'>Arts & Literature</Link>
          </li>
          <li>
            <Link href='/subject/home-economics'>Home Economics</Link>
          </li>
          <li>
            <Link href='/subject/science'>Science</Link>
          </li>
          <li>
            <Link href='/subject/history'>History</Link>
          </li>
          <li>
          <Link href='/subject/geography'>Geography</Link>
          </li>
          <li>
            <Link href='/subject/general'>General</Link>
          </li>
        </ul>
        <button>Sign Up!</button>
      </div>
    </header>
  );
};

export default Navbar;
