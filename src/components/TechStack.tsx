import {
  ReactDark,
  TypeScript,
  CSSNew,
  HTML5,
  JavaScript,
  ReactRouter,
  Git,
} from "@ridemountainpig/svgl-react";
import "../styles/TechStack.css";

export function TechStack() {
  return (
    <div className="tech-stack">
      <h1>Tech Stack</h1>
      <div className="tech-icons">
        <ul>
          <li>
            <ReactDark width={20} />
            <span>React</span>
          </li>
          <li>
            <TypeScript width={20} />
            <span>TypeScript</span>
          </li>
          <li>
            <CSSNew width={20} />
            <span>CSS</span>
          </li>
          <li>
            <HTML5 width={20} />
            <span>HTML</span>
          </li>
          <li>
            <JavaScript width={20} />
            <span>JavaScript</span>
          </li>
          <li>
            <ReactRouter width={20} />
            <span>React Router</span>
          </li>
          <li>
            <Git width={20} />
            <span>Git</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
