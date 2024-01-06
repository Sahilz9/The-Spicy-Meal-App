import { FaReact } from "react-icons/fa6";


const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart">
        <FaReact className="footer-icon"/>
      </i>
      <a
        href="https://www.linkedin.com/in/sahilyadav9/"
        target="_blank"
        title="Sahli Yadav's Linkedin Profile"
      >
        Sahil Yadav
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <strong>
        The <span> Spicy Meal</span>
      </strong>
    </div>
  );
};

export default Footer;
