import "./App.css";
import Navbar from "./components/Navbar";
import Tagline from "./components/Tagline";
import Features from "./components/Features";
import StartNow from "./components/StartNow";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import Companies from "./components/Companies";
import Bottom from "./components/Bottom";



const App = () => {
  return (
    <div>
      <Navbar />
      <Tagline />
      <Features />
      <StartNow />
      <Team />
      <FAQ />
      <Companies />
      <Bottom />
    </div>
  );
};

export default App;
