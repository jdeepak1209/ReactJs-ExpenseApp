import './App.css';

import ExpenseItems from './components/ExpenseItems/ExpenseItems';

function App(){
  let expenseDate = new Date(2022, 3, 28);
  let expenseTitle = "School Fee";
  let expenseAmount = 100;
  return (
  <div>
    <h3>Expense Tracker App</h3>
    <ExpenseItems 
      date = { expenseDate }
      title = { expenseTitle}
      amount = { expenseAmount }
      >
    </ExpenseItems>
  </div>);
}

export default App;