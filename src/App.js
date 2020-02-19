import React from 'react';
import ContainerComponent from "./components/ContainerComponent";
import TodoForm from "./components/TodoForm";
import Header from "./components/Header";

const App = () => {
    return (
        <div>
            <Header/>
            <TodoForm/>
            <ContainerComponent/>
        </div>
    );
};

export default App;
