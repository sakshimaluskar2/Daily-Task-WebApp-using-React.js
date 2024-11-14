import React, { useEffect, useState } from 'react'

import Task from "./Task";

const Home = () => {

  const initialArray = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
  //Usestate is used here - task array
  const [tasks, setTasks] = useState(initialArray);

  const [title, setTile] = useState("")
  const [description, setdescription] = useState("")

  console.log(title, description);


  const SubmitHandler = (e) => {
    e.preventDefault();
    //spradeoperator - ek ek element ko spred karta hai
    setTasks([...tasks, {title, description}]);
    setTile("");
    setdescription("");
  };
  const deleteTask = (index) => {
    const filteredArr = tasks.filter((val, i) => {
      return i !== index;
    });
    console.log(filteredArr);
    setTasks(filteredArr);
  }

  useEffect(()=>{
   localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <h1>DAILY GOALS</h1>
      <form onSubmit={SubmitHandler}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTile(e.target.value)} />
        <textarea placeholder="Description"
          value={description} onChange={(e) => setdescription(e.target.value)}></textarea>
        <button type="Submit">ADD</button>

      </form>

      {tasks.map((item, index) => (
        <Task key={index} title={item.title}
          description={item.description}
          deleteTask={deleteTask}
          index={index}
        />
      ))}
    </div>
  );
};
export default Home;
