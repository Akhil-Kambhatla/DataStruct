import React from 'react';
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div>
          <section className="section section-top">
        <div className="content rellax" data-rellax-speed="5">
          <h1>Data Structure Algorithms Guide</h1>
        </div>
      </section>

      <section className="section section-stream">
        <img src="https://i.ibb.co/TvdbMhQ/play-button.png" alt="Play-Button" className="play rellax" data-rellax-speed="-1" data-rellax-xs-speed="-5" />
        <div className="content rellax hover-effect" data-rellax-speed="10">
          <div>
            <h2 className="secondary-text">Learn Everything You Need To Know!</h2>
            <p>
              Unlock the secrets of Data Structures and Algorithms with our comprehensive guide. From fundamental
              concepts to advanced techniques, we've got you covered. Start your journey to coding mastery today!
            </p>
          </div>
          <div>
            <h2 className="secondary-text">Short is the new long</h2>
            <p>
              In the world of Data Structures and Algorithms, efficiency reigns supreme. Discover how concise code
              can lead to big performance gains. Master the art of compact solutions with our DSA guide.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-grid">
        {/* ... (rest of your JSX code) */}
      </section>

      <hr />

      

      <script src="https://cdnjs.cloudflare.com/ajax/libs/rellax/1.12.1/rellax.min.js" integrity="sha512-f5HTYZYTDZelxS7LEQYv8ppMHTZ6JJWglzeQmr0CVTS70vJgaJiIO15ALqI7bhsracojbXkezUIL+35UXwwGrQ==" crossorigin="anonymous"></script>
      <script src="main.js"></script>
    </div>
  );
};

export default Dashboard;
