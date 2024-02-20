import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home container">
      <h3>HI THERE !</h3>
      <h1>
        I'M <span>Irina Munteanu Bäck</span>
      </h1>
      <p>
        Frontend Developer - React | TypeScript | Node.js | Redux | MongoDB | Express.js
      </p>
      <Link to="/about">
        <button className="btn">About me</button>
      </Link>
    </section>
  );
};

export default Home;
