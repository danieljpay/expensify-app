import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";

export const ExpensesSummary = ({ expenseCount, totalExpensesNumber, expensesTotalAmount }) => {
    const expenseWord = expenseCount === 1  ? "expense" : "expenses";
    const formattedExpensesTotal = numeral(expensesTotalAmount / 100).format("$0,0.00");
    const hiddenExpenses = totalExpensesNumber - expenseCount;

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
                <h3 className="page-header__count">{hiddenExpenses} of expenses hidden</h3>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        totalExpensesNumber: state.expenses.length,
        expensesTotalAmount: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);