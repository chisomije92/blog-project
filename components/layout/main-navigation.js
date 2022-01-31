import Link from "next/link";
import Logo from "./logo";

const MainNavigation = () => {
  return (
    <header>
      <Link href="/" passHref>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
