import type { NextPage } from "next";
import Characters from "../components/Characters";

const Home: NextPage = () => {
  return (
    <div className="container">
      <h1>Rick and Morty</h1>
      <Characters />
    </div>
  );
};

export default Home;
