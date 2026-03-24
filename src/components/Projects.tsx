import "../styles/Projects.css";
import wardrobeImage from "../assets/wardrobe-eshop.jpg";
import chattrixImg from "../assets/chattrix.png";

export function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>

      {/* Add project cards here */}
      <div className="project-card">
        <a href="https://chattrix-live.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img src={chattrixImg} alt="Chattrix" />
          <div className="card-description">
            <h3>Chattrix</h3>
            <p>
              A full-stack real-time chat app where users can create rooms, invite others, and
              message each other instantly — no refresh needed. Built with Next.js App Router,
              Supabase and GitHub OAuth.
            </p>
            <div className="tech-used">
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Supabase</span>
              <span>Tailwind</span>
              <span>Shadcn</span>
            </div>
          </div>
        </a>
      </div>

      <div className="project-card">
        <a href="https://wardrobe-eshop.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img src={wardrobeImage} alt="Wardrobe E-Shop" />
          <div className="card-description">
            <h3>Wardrobe E-Shop</h3>
            <p>
              Frontend implementation of a e-commerce website, including product catalog navigation,
              filtering and sorting logic and persistent cart state.
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
