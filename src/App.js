import './App.css';
import TodoList from './todo-list';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash)


function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
