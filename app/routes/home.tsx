import type { Route } from "./+types/home";
import Navbar from "../components/navbar/Navbar";
import Break from "../components/break/Break";
import image from "../../public/favicon.ico"
import book from "../../public/book.png";
import weight from "../../public/weight.png";
import tag from "../../public/tag.png";
import browser from "../../public/browser.png";
import me from "../../public/me.jpg";
import me2 from "../../public/me2.jpg";
import star from "../../public/star.png";
import customer1 from "../../public/customer1.png";
import customer2 from "../../public/customer2.png";
import customer3 from "../../public/customer3.png";
import customer4 from "../../public/customer4.png";
import instagram from "../../public/instagram.png";
import whatsapp from "../../public/whatsapp.png";

import mine from "../../public/x.png";
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Shefo's App" },
    { name: "description", content: "Shefo's Portfolio app" },
  ];
}

export default function Home() {
  return (
    <div className="home-container">
      <div className="h-container">
        <Navbar />
        <div className="main flex-center">
          <div className="main-h1">
            <h1>
              Hey, I'm Ahmed Sherif
            </h1>
            <h2>I’m a senior <strong>React.js developer , </strong>
              creates <strong>responsive</strong> web apps</h2>
          </div>
          <div className="main-img">
            <img src={image} alt="image" />
          </div>
        </div>
      </div>







      
      <Break />
      <div className="facts">
        <div className="facts-img"><img src={me} alt="my first image" className="me1" />
          <img src={me2} alt="my second img" className="me2" />
        </div>
        <div className="facts-txt">
          <h1>Quick Facts About Me!</h1><br />
          <p >I craft sleek, high-performance web interfaces with React.js | turning ideas into interactive, user-friendly experiences that bring your vision to life.</p>
          <ul className="facts-list">
            <li >
              <img src={book} alt="book-icon" /> <p> Studied computer Science on my own</p>
            </li>
            <li>
              <img src={browser} alt="browser-icon" /><p> Started building front-end as a hobby but it turned to a job</p>
            </li>
            <li>
              <img src={tag} alt="tag-icon" /><p>Love Turning Ideas into life through coding</p>
            </li>
            <li>
              <img src={weight} alt="weight-icon" /><p>When I’m not coding I’m lifting at the GYM</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="call-div">



        <div className="call-txt">
          <div className="call-text">
            <h1>Ready To get your business to the next Level?!</h1>
            <p>Contact me now and join other business owners</p>
            <div className="images">
              <img src={star} alt="star-img" />
              <img src={star} alt="star-img" />
              <img src={star} alt="star-img" />
              <img src={star} alt="star-img" />
              <img src={star} alt="star-img" />
            </div>
            <div className="images2">
              <img src={customer1} alt="customer-1" />
              <img src={customer2} alt="customer-2" />
              <img src={customer3} alt="customer-3" />
              <img src={customer4} alt="customer-4" />
            </div>
          </div>
          <div className="call-image"> <img src={mine} alt="my-photo" /></div>
        </div>



        <div className="call-btn">
          <a href="https://cal.com/ahmed-sherif-tg2x15" target="_blank" rel="noopener noreferrer">
            Schedule A Call
          </a>
        </div>
      </div>

      <div className="contact-div">
        <h1>Ready To make your dream come true?!</h1>
        <p>Just Contact me to level up your business</p>
        <div className="btn-container">
          <div className="call-btn"><a href="https://www.instagram.com/ishefo0" target="_blank">
          <div className="call-btnn">
            <img src={instagram} alt="" className="call-imgg" /> Instagram
          </div>
          </a></div>
          <div className="call-btn"><a href="https://wa.me/+201274375560" target="_blank">
          <div className="call-btnn">
             <img src={whatsapp} alt="" className="call-imgg" />Whatsapp
          </div></a></div>

        </div>
      </div>




    </div>
  );
}