import Link from "next/link";
import Logo from "./logo";
import classes from "./main-navigation.module.css";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link href="/" passHref>
        <a className={classes.logoLink}>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">
              <a>Posts</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact Me</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
