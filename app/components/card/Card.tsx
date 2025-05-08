import React from "react";

interface CardProps {
  image: string;
  title: string;
  description: string;
  liveLink: string;
  githubLink: string;
}

function card({ image, title, description, liveLink, githubLink }: CardProps) {
  return (
    <div>
      {" "}
      <div className="project-card">
        <img src={image} alt={title} className="project-image" />
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <div className="project-buttons">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Project Link
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Github Repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default card;
