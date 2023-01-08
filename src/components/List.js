import React from "react";
import classes from "./List.module.css";

const List = ({ people }) => {
  return (
    <div className={classes.item}>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id}>
            <div className={classes.both}>
              <img src={image} />

              <div className={classes.boxx}>
                <h1>{name}</h1>
                <p>Age {age}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
