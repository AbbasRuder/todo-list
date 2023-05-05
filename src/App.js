import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import AddTodos from "./Components/AddTodos";
import Todos from "./Components/Todos";
import About from "./Components/About";
import Footer from "./Components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  let initTodo;
  if(localStorage.getItem('todos') === null ) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem('todos'))
  }

// Deletes todos
  const handleDelete = (todo) => {
    setTodo(todos.filter((e) => {
      return e !== todo;
    }));

    localStorage.setItem("todos", JSON.stringify(todos));
  };

// Adds new todos
  const addTodo = (title, desc) => {
    let slno = 1;
    if (todos.length > 0) {
      slno = todos[todos.length - 1].slno + 1;
    }
    const myTodo = {
        slno: slno,
        title: title,
        desc: desc,
      }
    setTodo([...todos, myTodo]);
    console.log("Add this", myTodo); 
  };
  
  const [todos, setTodo] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  
  return (
      <Router>
        <Header
          title="My Todo-List"
          homeSection="Home"
          aboutSection="About"
          searchbar={false}
        />

        <Switch>
          <Route exact path="/" render={() => {
            return (<>
              <AddTodos addTodo={addTodo} />
              <Todos todos={todos} handleDelete={handleDelete}/> 
            </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>


        <Footer />
      </Router>
  );
}

export default App;
