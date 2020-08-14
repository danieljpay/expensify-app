import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses.js";
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "./actions/filters.js";
import getVisibleExpenses from "./selectors/expenses.js";
import  "normalize.css/normalize.css";
import "./styles/styles.css";

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill", amount: 4500 }));
store.dispatch(addExpense({ description: "Gas bill", amount: 0, createdAt: 1000}));
store.dispatch(addExpense({ description: "Rent", amount: 109500}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));  