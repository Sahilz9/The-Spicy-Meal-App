import mineimg from "../assets/img/IMG_3499-min (1).png";
import linkedin from "../assets/img/linkedin (1).png";
import discord from "../assets/img/discord.png";
import telegram from "../assets/img/telegram.png";
import github from "../assets/img/github (1).png";

const About = () => {
  return (
    <>
      <h1 className="random-about"></h1>
      <h1 className="about-me">
        ABOUT ME
        <h1 className="about-me2">ABOUT ME</h1>
      </h1>
      <div className="about-container">
        {/* <Profile name = {"Sahil"}/> */}
        <div className="second-container">
          <div className="contain-about-img ">
            <span className="about-quote">
              "I am currently in my final year of Master of Computer
              Application, bringing a wealth of experience in frontend
              development to the table. Proficient in JavaScript, ReactJs,
              Redux, Tailwind CSS, and SASS, my focus lies in crafting seamless
              user experiences. I excel in solving intricate problems,
              underpinned by a strong foundation in Data Structures and
              Algorithms. My enthusiasm extends to the burgeoning realms of Web3
              and Blockchain technology, and I am eager to delve into their
              applications in the digital landscape. I am keen on establishing
              connections to explore collaborative opportunities on innovative
              projects. I invite discussions to explore potential synergies and
              ways in which we can contribute to groundbreaking initiatives."
            </span>
            <img className="about-img" src={mineimg} alt="img" />
          </div>
        </div>
        <div className="social-media">
          <h4 className="connect">Connect with me</h4>
          <div className="icons">
            <a href="https://www.linkedin.com/in/sahilyadav9/" target="_blank">
              <img className="linkedin-icon" src={linkedin} alt="" />
            </a>
            <a
              href="https://www.discordapp.com/users/931167875790700595"
              target="_blank"
            >
              <img className="discord-icon" src={discord} alt="" />
            </a>
            <a href="https://github.com/Sahilz9" target="_blank">
              <img className="github-icon" src={github} alt="" />
            </a>
            <a href="https://t.me/Stuart_99" target="_blank">
              <img className="telegram-icon" src={telegram} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
