import React, {useCallback} from "react";

const SetVisibilityButtons = ({ currentButton, setCurrentButton }) => {

    const changeButtonType = useCallback(buttonType => (() => setCurrentButton(buttonType)),[setCurrentButton]);

    return (
        <div className="buttons-div">
            <button
                className={currentButton === 'all' ? "selected-button" : "not-selected-button"}
                onClick={changeButtonType("all")}
            >
                All
            </button>
            <button
                className={currentButton === 'active' ? "selected-button" : "not-selected-button"}
                onClick={changeButtonType("active")}
            >
                Active
            </button>
            <button
                className={currentButton === 'completed' ? "selected-button" : "not-selected-button"}
                onClick={changeButtonType("completed")}
            >
                Completed
            </button>
        </div>
    );
};

export default SetVisibilityButtons;