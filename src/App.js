import React,{useState} from "react";

import Data from "./components/Data"; 
import List from "./components/List";
import classes from "./App.module.css"
const App = () => {

  const [people,setPeople]=useState(Data);
  return (

    <section className={classes.background}>
      <div className={classes.box}>

      <h3>{people.length} Birthday Today</h3>
      <List  people={people}></List>
      <div className={classes.buttons}>

      <button onClick={()=>setPeople([])}>Clear All</button>
      </div>
      </div>
</section>

    );

  }

  

export default App