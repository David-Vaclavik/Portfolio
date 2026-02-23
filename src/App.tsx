import "./styles/App.css";
import { Spotlight } from "./components/Spotlight";
import { TechStack } from "./components/TechStack";
import { LinkedIn, GitHubDark, Gmail } from "@ridemountainpig/svgl-react";

function App() {
  return (
    <Spotlight>
      <div className="app-container">
        <div className="hero">
          <h1>David Václavík</h1>
          <h3>Frontend Developer @ Czech Republic</h3>
          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/david-v%C3%A1clav%C3%ADk-401a96109"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn width={24} />
            </a>
            <a href="https://github.com/david-vaclavik" target="_blank" rel="noopener noreferrer">
              <GitHubDark width={24} />
            </a>
            <a href="mailto:david.vaclavik@gmail.com" target="_blank" rel="noopener noreferrer">
              <Gmail width={24} />
            </a>
          </div>
          {/* Also add resume */}
        </div>

        <TechStack />

        <div className="projects">
          <h2>Projects</h2>
        </div>
      </div>
    </Spotlight>
  );
}

export default App;
