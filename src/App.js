import { useState } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";

function App() {
  const [todos, setTodos] = useState(["Check the pizza ", "go to Ahmed house"]);
  const [newTodo, setNewTodo] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  // adding Todo by clicking on  the enter button in the keyboard
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  // the function to add Todo to the list  of Todos
  const handleAddTodo = () => {
    if (newTodo !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    } else {
      alert("Try to type something Bro 🦕");
    }
  };

  // Remove todo from the list by it index
  const removeTodo = (index) => {
    const newTodoList = [...todos];
    newTodoList.splice(index, 1);
    setTodos(newTodoList);
  };

  //Additional Function for editing
  const handleEditClick = (index) => {
    setEditingIndex(index);
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
          <Table striped borderless hover>
            {todos.map((todo, index) => (
              <tr>
                <>
                  {" "}
                  <td onClick={() => handleEditClick(index)}>{todo}</td>
                  <td>
                    {" "}
                    <Button variant="danger" onClick={() => removeTodo(index)}>
                      X
                    </Button>
                  </td>
                </>
              </tr>
            ))}
          </Table>
        </Row>
      </Container>
    </div>
  );
}

export default App;
