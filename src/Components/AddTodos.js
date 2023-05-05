import { React, useState } from "react";

export default function AddTodos(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault(); //This prevents the page from reloading
    if (!title || !desc) {
      alert("No title or description");
    }
    else {
      props.addTodo(title, desc);
    }
    setTitle("");
    setDesc("");

  };

  return (
    <div className="container">
      <form onSubmit={submit}>
        <h3 className="text-center py-3">Add Todo</h3>
        <div className="mb-3">
          <label htmlFor="title" className="form-label"> Todo Title </label>
          <input type="text" className="form-control" id="title" value={title} onChange={(e) => {setTitle(e.target.value);}} />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label"> Todo Description </label>
          <input type="text" className="form-control" id="desc" value={desc} onChange={(e) => setDesc(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary btn-sm"> Add Todo </button>
      </form>
    </div>
  );
}
