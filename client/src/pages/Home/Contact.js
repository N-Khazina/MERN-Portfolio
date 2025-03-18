import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  const user = {
    name: "Tresor Nyiringoma HABIMANA",
    age: 25,
    gender: "Male",
    email: "tresornyiringoma@gmail.com",
    mobile: "+250780470322",
    country: "Rwanda",
  };
  return (
    <div>
      <SectionTitle title="Say Hello" />

      <div className="flex sm:flex-col item-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-white">{"{"}</h1>
          {Object.keys(user).map((key) => (
            <h1 className="text-white">
              <span className="text-white">{key}</span> :{" "}
              <span className="text-white">{user[key]}</span>
            </h1>
          ))}
          <h1 className="text-white">{"}"}</h1>
        </div>
        <div className="h-[400px]">
          <dotlottie-player
            src="https://lottie.host/5e42eb6c-edaf-438f-803f-8fbb7c2e6928/SyLTB0uqGG.lottie"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
