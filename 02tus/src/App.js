import UseState from './hook/UseState'
import UseEffect from './hook/UseEffect'
import TowayBinding from './form/TowayBinding'
import Radio from './form/Radio'
import Checkbox from './form/Checkbox'
import TodoList from './form/TodoList'
import Counter from './form/Counter'
import './App.css'


function App() {
  return (
    <div className="App">
      <TodoList />
      <UseState />
      <UseEffect />
      <TowayBinding />
      <Radio />
      <Checkbox />
      <Counter/>
    </div>
  );
}

export default App;
