import {  Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import UseRef from './pages/UseRef';
import UseContext from './pages/UseContext';
import Todo from './todo';
import NoPage from './pages/NoPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="useref" element={<UseRef />} />
                <Route path="usecontext" element={<UseContext />} />
                <Route path="todo" element={<Todo />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    );
}

export default App;
