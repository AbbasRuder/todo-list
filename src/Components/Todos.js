import react from "react";
import TodoItem from "../Components/TodoItem";

export default function Todos(props) {
  let myStyle = {
    minHeight: "100vh"
  }

  return (
    <>
      <div className="container" style={myStyle}>
        <h3 className="text-center my-3">Todo List</h3>
        {props.todos.length === 0 ? (
          <h3>No todos</h3>
        ) : (
          props.todos.map((todo) => {
            return (
              <TodoItem
                todo={todo}
                key={todo.slno}
                onDelete={() => props.handleDelete(todo)}
              />
            );
          })
        )}
      </div>
    </>
  );
}
