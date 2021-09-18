import React, { useState } from "react";
import MadlibForm from "./MadlibForm";

const Madlib = () => {
  const [madlib, setMadlib] = useState("");
  const createMadlib = (noun1, noun2, adjective, color) => {
    setMadlib(
      (madlib) => `There was a ${color} ${noun1} who ${adjective} ${noun2}`
    );
  };
  return (
    <div>
      <MadlibForm madlib={createMadlib} />
      <h1>{madlib}</h1>
    </div>
  );
};
export default Madlib;
