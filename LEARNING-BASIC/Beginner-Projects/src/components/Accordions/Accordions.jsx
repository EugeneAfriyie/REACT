import React, { useState } from "react";
import "./accordion.css";

const Accordions = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="accordion-card">
      <div className="header" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <p className="icon">{isActive ? "-" : "+"}</p>
      </div>

      {isActive && (
        <div className="content">
          <p className="card-info">{content}</p>
        </div>
      )}
    </section>
  );
};

export default Accordions;
