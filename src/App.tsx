import "./styles/App.css";
import { Spotlight } from "./components/Spotlight";
import { TechStack } from "./components/TechStack";

function App() {
  return (
    <Spotlight>
      <div className="app-container">
        <div className="hero">
          <h1>David Václavík</h1>
          <h3>Frontend Developer</h3>
          {/* ADD links: LinkedIn, GitHub, Email */}
          {/* Also add resume */}
        </div>

        <TechStack />

        <div className="projects">
          <h1>Projects</h1>
        </div>
      </div>
    </Spotlight>
  );
}

export default App;
