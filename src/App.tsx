import "./styles/App.css";
import { Spotlight } from "./components/Spotlight";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { AboutMe } from "./components/AboutMe";
import { Hero } from "./components/Hero";

function App() {
  return (
    <Spotlight>
      <main className="app-container">
        <Hero />

        <AboutMe />

        <TechStack />

        <Projects />
      </main>
    </Spotlight>
  );
}

export default App;
