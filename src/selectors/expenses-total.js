const getExpensesTotal = (expenses) => {
    let finalAmount;

    if(expenses.length === 0){
        finalAmount = 0;
    } else {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;   
        let totalAmounts = expenses.map((expense) => {
            return expense.amount;
        });
        finalAmount = totalAmounts.reduce(reducer);
    }

    return finalAmount;
};

export default getExpensesTotal;