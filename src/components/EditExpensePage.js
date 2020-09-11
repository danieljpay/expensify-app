import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses.js";
import RemoveExpenseModal from "./RemoveExpenseModal";

export class EditExpensePage extends React.Component {
    state = {
        deletingExpense: false
    };
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push("/");
    };
    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.setState(() => ({ deletingExpense: false }));
        this.props.history.push("/");
    };
    onAffirmRemove = () => {
        this.setState(() => ({ deletingExpense: true}));
    };
    onClearDeletingExpense = () => {
        this.setState(() => ({ deletingExpense: false }));
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button 
                        className="button button--secondary"
                        onClick={this.onAffirmRemove}
                    >
                        Remove Expense
                    </button>   
                </div>  
                <RemoveExpenseModal 
                    deletingExpense={this.state.deletingExpense}
                    onClearDeletingExpense={this.onClearDeletingExpense}
                    onRemove={this.onRemove}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);