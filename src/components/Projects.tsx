import "../styles/Projects.css";
import wardrobeImage from "../assets/wardrobe-eshop.jpg";

export function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>

      {/* Add project cards here */}
      <div className="project-card">
        <a href="https://wardrobe-eshop.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img src={wardrobeImage} alt="Wardrobe E-Shop" />
          <div className="card-description">
            <h3>Wardrobe E-Shop</h3>
            <p>
              Frontend implementation of a e-commerce application, including product catalog
              navigation, filtering and sorting logic and persistent cart state.
            </p>
            <div className="tech-used">
              <span>React</span>
              <span>TypeScript</span>
              <span>Vite</span>
              <span>React Router</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
