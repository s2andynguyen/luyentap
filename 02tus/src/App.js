import UseState from './hook/UseState'
import UseEffect from './hook/UseEffect'
import TowayBinding from './form/TowayBinding'
import Radio from './form/Radio'
import Checkbox from './form/Checkbox'
import TodoList from './form/TodoList'
import Counter from './form/Counter'
import './App.css'
import UseReducer from './hook/UseReducer'
import TodoReducer from './hook/TodoReducer'


function App() {
  return (
    <div className="App">
      <TodoList />
      <UseState />
      <UseEffect />
      <UseReducer/>
      <TodoReducer />
      <TowayBinding />
      <Radio />
      <Checkbox />
      <Counter/>
    </div>
  );
}

export default App;
