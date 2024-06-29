import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTransaction } from "../features/transaction/transactionSlice";

export default function Form() {
  const [name, setName] = useState("");
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState(null);

  const dispatch = useDispatch();
  const { isLoading, isError, error } = useSelector(
    (state) => state.transaction
  );

  const handleCreate = (e) => {
    e.preventDefault();
    let transaction = {
      name,
      amount: Number(amount),
      type,
    };
    dispatch(createTransaction(transaction));

    e.target.reset();
  };
  return (
    <div className="form">
      <h3>Add new transaction</h3>

      <form onSubmit={handleCreate}>
        <div className="form-group">
          <label for="transaction_name">Name</label>
          <input
            type="text"
            name="transaction_name"
            placeholder="Enter name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group radio">
          <label for="transaction_type">Type</label>
          <div className="radio_group">
            <input
              type="radio"
              value="income"
              name="transaction_type"
              required
              checked={type === "income"}
              onCanPlay={(e) => setType("income")}
            />
            <label for="transaction_type">Income</label>
          </div>
          <div className="radio_group">
            <input
              type="radio"
              value="expense"
              name="transaction_type"
              placeholder="Expense"
              required
              checked={type === "expense"}
              onCanPlay={(e) => setType("expense")}
            />
            <label for="transaction_type">Expense</label>
          </div>
        </div>

        <div className="form-group">
          <label for="transaction_amount">Amount</label>
          <input
            type="number"
            placeholder="Enter amount"
            name="transaction_amount"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button className="btn" type="submit" disabled={isLoading}>
          Add Transaction
        </button>
        {!isLoading && isError && (
          <p className="error">{error || "There is an error occurred"}</p>
        )}
      </form>

      <button className="btn cancel_edit">Cancel Edit</button>
    </div>
  );
}
