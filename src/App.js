import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
function App() {
  const [todos, setTodos] = useState(["Check the pizza ", "go to Ahmed house"]);
  const [newTodo, setNewTodo] = useState("");

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };
  const handleAddTodo = () => {
    if (newTodo !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    } else {
      alert("Try to type something Bro 🦕");
    }
  };
  const removeTodo = (index) => {
    const newTodoList = [...todos];
    newTodoList.splice(index, 1);
    setTodos(newTodoList);
  };
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center">
          <h1> My Todos</h1>
          <input
            value={newTodo}
            onKeyDown={(e) => handleKeyPress(e)}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add your new todo here.."
          ></input>
          <Button onClick={handleAddTodo} variant="primary">
            Add
          </Button>
          <ol>
            {todos.map((todo, index) => (
              <>
                <li key={index}>
                  {todo}{" "}
                  <Button variant="danger" onClick={() => removeTodo(index)}>
                    X
                  </Button>
                </li>
              </>
            ))}
          </ol>
        </Row>
      </Container>
    </div>
  );
}

export default App;
