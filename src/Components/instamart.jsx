import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="border border-black">
      <h1 className="text-2xl text-bold">{title}</h1>
      {isVisible ? (
        <button
          onClick={() => setIsVisible(false)}
          className="cursor-pointer underline"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="cursor-pointer underline"
        >
           Show
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setvisibleSection] = useState("about");
  return (
    <div>
      <h2 className="text-3xl pt-8 m-2 font-bold">Instamart</h2>
      <Section
        title={"About Instamart"}
        description={
          "Lorem ipsum dolor? sit amet consectetur adipisicing elit Laborum sequi iure voluptatibus nihil nemo fugiat dicta quae Mollitia ab delectus velit blanditiis Veniam ducimus laboriosam modi delectus amet iure distinctio! Lorem ipsum dolor? sit amet consectetur adipisicing elit Laborum sequi iure voluptatibus nihil nemo fugiat dicta quae Mollitia ab delectus velit blanditiis Veniam ducimus laboriosam modi delectus amet iure distinctio!"
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() => {
          setvisibleSection("about");
        }}
      />
      <Section
        title={"Team"}
        description={
          "Lorem ipsum dolor? sit amet consectetur adipisicing elit Laborum sequi iure voluptatibus nihil nemo fugiat dicta quae Mollitia ab delectus velit blanditiis Veniam ducimus laboriosam modi delectus amet iure distinctio! Lorem ipsum dolor? sit amet consectetur adipisicing elit Laborum sequi iure voluptatibus nihil nemo fugiat dicta quae Mollitia ab delectus velit blanditiis Veniam ducimus laboriosam modi delectus amet iure distinctio!"
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() => {
          setvisibleSection("team");
        }}
      />

      <Section
        title={"Careers"}
        description={
          "Lorem ipsum dolor? sit amet consectetur adipisicing elit Laborum sequi iure voluptatibus nihil nemo fugiat dicta quae Mollitia ab delectus velit blanditiis Veniam ducimus laboriosam modi delectus amet iure distinctio! Lorem ipsum dolor? sit amet consectetur adipisicing elit Laborum sequi iure voluptatibus nihil nemo fugiat dicta quae Mollitia ab delectus velit blanditiis Veniam ducimus laboriosam modi delectus amet iure distinctio!"
        }
        isVisible={visibleSection === "career"}
        setIsVisible={() => {
          setvisibleSection("career");
        }}
      />
    </div>
  );
};
export default Instamart;
