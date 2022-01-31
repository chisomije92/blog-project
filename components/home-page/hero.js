import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/jerry.png"
          alt="An Image showing Jerry"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi! I`m Jerry</h1>
      <p>
        I write about web development with specific interests in React and
        relevant libraries.
      </p>
    </section>
  );
};

export default Hero;
