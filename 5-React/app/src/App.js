import React from 'react'
import './App.css'
// import CounterBtn from './CounterBtn'

function App() {
  return (
    <>
      <div class="fox-header">
        <div class="inner-div">
          <h1>FOX.</h1>
          <h4>University</h4>

          <div class="email-portion">
            <i class="fa-sharp fa-solid fa-paper-plane fa-beat  email-icon"></i>
            <span class="email-text">Email</span>
            <span class="your-email">youremail@email.com</span>
          </div>

          <div class="call-portion">
            <i class="fa-solid fa-phone fa-shake call-icon"></i>
            <span class="call-text">Call</span>
            <span class="call-us">Call Us:+1234567890</span>
          </div>

          <button type="button" class="apply-btn">
            Apply now
          </button>
        </div>
      </div>

      <div class="navbar">
        <div class="nav-inner-div">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Staff</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <input type="search" id="search-bar" placeholder="Search" />
        <i class="fa-solid fa-magnifying-glass search-icon"></i>
      </div>

      <div class="background-image">
        <div class="color-over-img">
          <div class="bgi-text">
            <h1>
              University, College <br /> School Education
            </h1>
            <p>
              A small river named Dude flows by their place and supplies it with{' '}
              <br /> the necessary regelialia.
            </p>

            <button class="bgi-btn">Contact Us</button>
          </div>
        </div>
      </div>

      <div class="cards">
        <div class="teachers-content content">
          <i class="fa-solid fa-chalkboard-user"></i>
          <h4>Citified Teachers</h4>
          <p>
            Even the all-powerful pointing has no control about the blind texts
            it is an almost unortographic.
          </p>
        </div>

        <div class="education-content content">
          <i class="fa-solid fa-book-open-reader"></i>
          <h4>Special Education</h4>
          <p>
            Even the all-powerful pointing has no control about the blind texts
            it is an almost unortographic.
          </p>
        </div>

        <div class="libr/ary-content content">
          <i class="fa-solid fa-book"></i>
          <h4>Books & Libr/ary</h4>
          <p>
            Even the all-powerful pointing has no control about the blind texts
            it is an almost unortographic.
          </p>
        </div>
        <div class="sport-content content">
          <i class="fa-solid fa-medal"></i>
          <h4>Sport Club</h4>
          <p>
            Even the all-powerful pointing has no control about the blind texts
            it is an almost unortographic.
          </p>
        </div>
      </div>

      <div class="offer-portion">
        <div class="offer-header">
          <h1>What We Offer</h1>
          <p>
            On her we she met a copy. The copy warned the Little Blind Text,
            That where it come from it would have been rewritten a thousand
            times and everything that was left from its origin would be the
            world.
          </p>
        </div>
        <div class="offers">
          <div class="row">
            <div class="first-col">
              <div class="icon-div">
                <i class="fa-solid fa-shield"></i>
              </div>
              <h4>Safety First</h4>
              <p>
                Your time is limited, so don't waste it living someone else's
                life. Don't be trapped by dogma
                <br />
                -Steve Jobs
              </p>
            </div>
            <div class="second-col">
              <div class="icon-div">
                <i class="fa-solid fa-book-open-reader"></i>
              </div>
              <h4>Regular Classes</h4>
              <p>
                The greatest glory in living lies not in never falling, but in
                rising every time we fall. <br />
                -Nelson Mandela
              </p>
            </div>
          </div>

          <div class="row">
            <div class="first-col">
              <div class="icon-div">
                <i class="fa-solid fa-chalkboard-user"></i>
              </div>
              <h4>Certified Teachers</h4>
              <p>
                If you look at what you have in life, you'll always have more.
                If you look at what you don't have in life, you'll never have
                enough. <br /> -Oprah Winfrey
              </p>
            </div>
            <div class="second-col">
              <div class="icon-div">
                <i class="fa-solid fa-people-roof"></i>
              </div>
              <h4>Sufficient Classrooms</h4>
              <p>
                If you set your goals ridiculously high and it's a failure, you
                will fail above everyone else's success. <br /> -James Cameron
              </p>
            </div>
          </div>

          <div class="row">
            <div class="first-col">
              <div class="icon-div">
                <i class="fa-brands fa-slack"></i>
              </div>
              <h4>Creative Lessons</h4>
              <p>
                Spread love everywhere you go. Let no one ever come to you
                without leaving happier.
                <br /> -Mother Teresa
              </p>
            </div>
            <div class="second-col">
              <div class="icon-div">
                <i class="fa-regular fa-futbol"></i>
              </div>
              <h4>Sports Facilities</h4>
              <p>
                You may say I'm a dreamer, but I'm not the only one. I hope
                someday you'll join us. And the world will live as one. <br />{' '}
                -John Lennon
              </p>
            </div>
          </div>
        </div>
        <div class="side-bar"></div>
      </div>
    </>
  )
}

export default App
