import { GitHubDark, LinkedIn } from "@ridemountainpig/svgl-react";
import Mail from "../assets/mail.svg";
import File from "../assets/file-user.svg";
import "../styles/Hero.css";

export function Hero() {
  return (
    <div className="hero">
      <h1>David Václavík</h1>

      <h3>
        Frontend Developer{" "}
        <span style={{ whiteSpace: "nowrap" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-map-pin-icon lucide-map-pin"
          >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
          </svg>{" "}
          Czech Republic
        </span>
      </h3>

      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/davidvaclavik-dv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn width={24} />
        </a>
        <a href="https://github.com/david-vaclavik" target="_blank" rel="noopener noreferrer">
          <GitHubDark width={24} />
        </a>
        <a href="mailto:davidvaclavik.dv@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={Mail} alt="Mail" color="white" />
        </a>

        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <button>
            Resume <img src={File} alt="Resume" />
          </button>
        </a>
      </div>
    </div>
  );
}
