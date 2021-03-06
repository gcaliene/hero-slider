import React from 'react';

const HeroSection = () => (
  <section class="cd-hero js-cd-hero js-cd-autoplay">
    <ul class="cd-hero__slider">
      <li class="cd-hero__slide cd-hero__slide--selected js-cd-slide">
        <div class="cd-hero__content cd-hero__content--full-width">
          <h2>Hero slider</h2>
          <p>A simple, responsive slideshow in CSS &amp; JavaScript.</p>
          <a href="http://codyhouse.co/gem/hero-slider/" class="cd-hero__btn">
            Article &amp; Download
          </a>
        </div>
      </li>

      <li class="cd-hero__slide js-cd-slide">
        <div class="cd-hero__content cd-hero__content--half-width">
          <h2>Slide title here</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            consequatur cumque natus!
          </p>
          <a href="#0" class="cd-hero__btn">
            Start
          </a>
          <a href="#0" class="cd-hero__btn cd-hero__btn--secondary">
            Learn More
          </a>
        </div>

        <div class="cd-hero__content cd-hero__content--half-width cd-hero__content--img">
          <img src="assets/tech-1.jpg" alt="tech 1" />
        </div>
      </li>

      <li class="cd-hero__slide js-cd-slide">
        <div class="cd-hero__content cd-hero__content--half-width cd-hero__content--img">
          <img src="assets/tech-2.jpg" alt="tech 2" />
        </div>

        <div class="cd-hero__content cd-hero__content--half-width">
          <h2>Slide title here</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            consequatur cumque natus!
          </p>
          <a href="#0" class="cd-hero__btn">
            Start
          </a>
          <a href="#0" class="cd-hero__btn cd-hero__btn--secondary">
            Learn More
          </a>
        </div>
      </li>

      <li class="cd-hero__slide cd-hero__slide--video js-cd-slide">
        <div class="cd-hero__content cd-hero__content--full-width">
          <h2>Slide title here</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
            explicabo.
          </p>
          <a href="#0" class="cd-hero__btn">
            Learn more
          </a>
        </div>

        <div
          class="cd-hero__content cd-hero__content--bg-video js-cd-bg-video"
          data-video="assets/video/video"
        />
      </li>

      <li class="cd-hero__slide js-cd-slide">
        <div class="cd-hero__content cd-hero__content--full-width">
          <h2>Slide title here</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
            explicabo.
          </p>
          <a href="#0" class="cd-hero__btn">
            Start
          </a>
          <a href="#0" class="cd-hero__btn cd-hero__btn--secondary">
            Learn More
          </a>
        </div>
      </li>
    </ul>
    <div class="cd-hero__nav js-cd-nav">
      <nav>
        <span class="cd-hero__marker cd-hero__marker--item-1 js-cd-marker" />

        <ul>
          <li class="cd-selected">
            <a href="#0">Intro</a>
          </li>
          <li>
            <a href="#0">Tech 1</a>
          </li>
          <li>
            <a href="#0">Tech 2</a>
          </li>
          <li>
            <a href="#0">Video</a>
          </li>
          <li>
            <a href="#0">Image</a>
          </li>
        </ul>
      </nav>
    </div>{' '}
  </section>
);

export default HeroSection;
