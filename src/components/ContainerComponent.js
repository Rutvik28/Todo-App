import React, {useContext, useState} from "react";
import Footer from "./Footer";
import ShowTasks from "./ShowTasks";
import {store} from "../store/store";

const ContainerComponent = () => {
    const [currentButton, setCurrentButton] = useState("all");
    const { tasks } = useContext(store).state;

    return (
        <div className="container">
            <ShowTasks currentButton={currentButton}/>
            {
                tasks.length > 0 ?
                    <Footer
                        currentButton={currentButton}
                        setCurrentButton={setCurrentButton}
                    /> :
                    <div className="container">
                        No items
                    </div>
            }
        </div>
    );
};

export default ContainerComponent;