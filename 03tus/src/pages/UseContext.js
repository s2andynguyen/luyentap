import { createContext, useContext } from 'react';

const UserData = createContext();

function UseContext() {
    const user = 'ThanhTung';
    return (
        <UserData.Provider value={user}>
            <h1>UseContext</h1>
            <Component1 />
        </UserData.Provider>
    );
}
function Component1() {
    return (
        <div>
            <h3>Component 1</h3>
            <Component2 />
        </div>
    );
}

function Component2() {
    return (
        <div>
            <h3>Component 2</h3>
            <Component3 />
        </div>
    );
}
function Component3() {
    const user = useContext(UserData);
    return (
        <div>
            <h3>Component 2</h3>
            <h1>Hello {user}</h1>
        </div>
    );
}
export default UseContext;
