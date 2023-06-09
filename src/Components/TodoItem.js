import react from "react";

export default function TodoItem(props) {

  return (
    <>
      <div className="my-3">
        <h4>{props.todo.title}</h4>
        <p>{props.todo.desc}</p>
        <button className="btn btn-sm btn-danger" onClick={props.onDelete}> Delete </button> <hr />
      </div>
    </>
  );
}
