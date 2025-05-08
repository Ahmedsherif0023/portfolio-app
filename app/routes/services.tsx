import type { Route } from "./+types/services";
import Navbar from "../components/navbar/Navbar";
import Break from "~/components/break/Break";
import me3 from "../../public/me3.jpg";
import icon1 from "../../public/browser.png";
import icon2 from "../../public/react.png";
import icon3 from "../../public/api.png";
import icon4 from "../../public/track.png";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Services" },
    { name: "description", content: "Discover our services." },
  ];
}

export default function Services() {
  return (
    <div className="services-container">
      <div className="Newsletter-container">
        <Navbar />
        <div className="Newsletter">
          <div className="left-sec">
            <h1>My Services</h1>
            <p>I’m a Senior <strong>Software Engineer</strong>, aspiring <strong>Entrepreneur</strong></p>
            <div className="input-container"><input type="text" placeholder="E-mail Address" /><button className="subscribe-btn">Subscribe</button></div>
          </div>
          <div className="right-sec"><img src={me3} alt="my third image" /></div>
        </div>
      </div>
        <Break />





      <div className="Services">
        <div className="what-can-i-do">
          <h1>What Can I do for You ??</h1>
          <p>I provide <strong>one-on-one</strong> expertise to guide you & your business to <strong>higher levels</strong></p>
        </div>
        <div className="services-cards">
          <div className="card"><h1><img src={icon1} alt="" /> Building UI Components</h1>
            <p>Create reusable, modular components (buttons, forms, cards, etc.) using React.</p>
          </div>
          <div className="card"><h1><img src={icon2} alt="" /> Manage State</h1>
            <p>Handle application data using React’s built-in state (useState, useReducer) or external libraries like Redux or Zustand.</p>
          </div>
          <div className="card"><h1><img src={icon3} alt="" />Connect to APIs</h1>
            <p>Use fetch or axios to call backend APIs and display dynamic data.</p>
          </div>
          <div className="card"><h1><img src={icon4} alt="" />Handle Routing</h1>
            <p>Use libraries like React Router to manage navigation between pages in a single-page app (SPA).</p>
          </div>
        </div>

      </div>
    </div>
  );
}