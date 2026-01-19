import "./styles/App.css";
import { Spotlight } from "./components/Spotlight";

function App() {
  return (
    <Spotlight>
      <div className="hero">
        <h1>David Václavík</h1>
        <p>Frontend Developer focused on building clean, accessible, and responsive websites.</p>
        <p>I love solving problems through code. </p>
        {/* ADD links: LinkedIn, GitHub, Email */}
        {/* Also add resume */}
      </div>

      <div className="projects">
        <h1>Projects</h1>
      </div>
    </Spotlight>
  );
}

export default App;
