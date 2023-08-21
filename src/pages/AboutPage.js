import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title='About'></PageHero>
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article className='title'>
          <h2>our story</h2>
          <div className='underline'></div>
          <p>
            Welcome to Sri's Pucks, where our passion for hockey meets the
            excitement of childhood! Our journey began with a vision to ignite
            young athletes' love for the game. From the very start, we've been
            dedicated to crafting top-notch hockey equipment tailored
            exclusively for children. Our story is one of inspiration, driven by
            the belief that every aspiring player deserves gear that's safe,
            comfortable, and high-performing. Guided by this commitment, we've
            meticulously designed each piece, ensuring it's not just equipment,
            but a bridge to dreams realized on the ice. Join us in celebrating
            the joy of hockey and empowering the champions of tomorrow with gear
            that's a perfect fit for their growing ambitions.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
