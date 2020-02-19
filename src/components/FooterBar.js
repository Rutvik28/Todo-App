import React, {useContext} from "react";
import {store} from "../store/store";
import {clearCompletedAction} from "../actions/actions";

const FooterBar = () => {
    const {state, dispatch} = useContext(store);

    const countUncheckedItems = () => state.tasks.filter(task => !task.isChecked).length;
    const clearCompleted = () => dispatch(clearCompletedAction());

    return (
      <div className="footer-bar">
          <p>{countUncheckedItems()} items left</p>
          <button
              className="clear-completed-button"
              onClick={clearCompleted}
          >
              Clear Completed
          </button>
      </div>
    );
}

export default FooterBar;