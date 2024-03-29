import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 sm:px-16 lg:px-0 py-24"
    >
      <div>
        <p
          className="text-sm sm:text-base text-accent"
          data-sal="zoom-in"
          data-sal-delay="200"
          data-sal-duration="1700"
        >
          Hello there, my name is
        </p>
        <p
          className="text-4xl md:text-5xl lg:text-6xl text-main-text font-bold leading-tight"
          data-sal="slide-right"
          data-sal-delay="200"
          data-sal-duration="900"
        >
          Warun Singhal
        </p>
        <p
          className="text-4xl md:text-5xl lg:text-6xl text-secondary-text mod-let-space leading-none"
          data-sal="zoom-in"
          data-sal-delay="200"
          data-sal-duration="1100"
        >
          I convert idea into code
        </p>
        <div className="text-sm sm:text-base my-16 text-secondary-text">
          <p data-sal="zoom-in" data-sal-delay="200" data-sal-duration="1300">
          I'm a software developer living in Phuket, Thailand.{" "}
            <br className="md:block hidden" />
            Mainly use TypeScript with various web technologies シ
          </p>
        </div>
        <button
          className="rounded py-3 px-5 border border-accent outline-none animate-bounce"
          onClick={() => scrollTo("#about")}
          data-sal="zoom-in"
          data-sal-delay="200"
          data-sal-duration="1700"
        >
          Explore More
        </button>
      </div>
    </section>
  );
};

export default Hero;
