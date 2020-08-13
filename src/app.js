import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense, removeExpense, editExpense } from "./actions/expenses.js";
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "./actions/filters.js";
import getVisibleExpenses from "./selectors/expenses.js";
import  "normalize.css/normalize.css";
import "./styles/styles.css";

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill"}));
store.dispatch(addExpense({ description: "Gas bill"}));
store.dispatch(setTextFilter("water"));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));  