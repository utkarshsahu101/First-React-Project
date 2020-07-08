import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Person = ({ img, name, job, children }) => {
  // console.log(props);
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

  return (
    <article className="person">
      <img src={url} alt="random image" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};
const PersonList = () => {
  return (
    <section className="personList">
      <Person img="32" name="john" job="developer"></Person>
      <Person img="67" name="bob" job="designer">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, fuga!</p>
      </Person>
      <Person img="89" name="susy" job="artist"></Person>
    </section>
  );
};

ReactDOM.render(<PersonList></PersonList>, document.getElementById("root"));
