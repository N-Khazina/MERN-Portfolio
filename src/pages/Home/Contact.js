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

      <div className="flex flex-col gap-1">
        <h1 className="text-white">{'{'}</h1>
        {Object.keys(user).map((key) => (
            <h1>
                <span className="text-white">{key}</span> : <span className="text-white">{user[key]}</span>
            </h1>
))}
<h1 className="text-white">{"}"}</h1>
      </div>
    </div>
  );
}

export default Contact;
 