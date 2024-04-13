/* eslint-disable react/jsx-key */
import SectionsTittle from "../../components/SectionsTitle";

const Contact = () => {
  const user = {
    Name: "Richmond Andoh",
    Age: null,
    Gender: "Male",
    Email: "richmondandoh00@gmail.com",
    Mobile: "+233 557 010 890",
    Country: "Ghana",
  };
  return (
    <div className="pb-10 pt-12">
      <SectionsTittle title="Say Hello" />

      <div className="flex ">
        <div className="flex flex-col gap-5">
          <h1 className="text-white">{"{"}</h1>
          {Object.keys(user).map((key) => (
            <h1 className="ml-5">
              <span className="text-white">{key} : </span>
              <span className="text-white">
                {user[key] !== null ? user[key] : "N/A"}
              </span>
            </h1>
          ))}
          <h1 className="text-white">{"}"}</h1>
        </div>
        <div>
          <lottie-player
            src="https://lottie.host/cab292f5-8a0b-4703-8023-421baa79b7f4/69Hkye5aVK.json"
            background="transparent"
            speed="1"
            loop
            controls
            autoplay
            direction="1"
            mode="normal"
          ></lottie-player>
        </div>
      </div>
    </div>
  );
};

export default Contact;
