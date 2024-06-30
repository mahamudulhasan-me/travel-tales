import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createTransaction,
  editInactive,
  updateTransaction,
} from "../features/transaction/transactionSlice";

export default function Form() {
  const [name, setName] = useState("");
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const dispatch = useDispatch();
  const { isLoading, isError, error } = useSelector(
    (state) => state.transaction
  );
  const { editing } = useSelector((state) => state.transaction);
  useEffect(() => {
    const { id, name, type, amount } = editing;
    if (id) {
      setEditMode(true);
      setName(name);
      setType(type);
      setAmount(amount);
    } else {
      setEditMode(false);
      setName("");
      setType("income");
      setAmount("");
    }
  }, [editing]);

  const reset = () => {
    setName("");
    setType("");
    setAmount("");
  };

  const handleCreate = (e) => {
    e.preventDefault();
    let transaction = {
      name,
      amount: Number(amount),
      type,
    };
    dispatch(createTransaction(transaction));
    reset();
    e.target.reset();
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    let transaction = {
      name,
      amount: Number(amount),
      type,
    };

    dispatch(updateTransaction({ id: editing?.id, data: transaction }));
    reset();
    e.target.reset();
    setEditMode(false);
  };

  const handleCancelUpdate = () => {
    setEditMode(false);
    dispatch(editInactive());
  };
  return (
    <div className="form">
      <h3>Add new transaction</h3>

      <form onSubmit={editMode ? handleUpdate : handleCreate}>
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
              onClick={(e) => setType("income")}
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
              onClick={(e) => setType("expense")}
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
          {editMode ? "Update Transaction" : "Add Transaction"}
        </button>
        {!isLoading && isError && (
          <p className="error">{error || "There is an error occurred"}</p>
        )}
      </form>

      {editMode && (
        <button className="btn cancel_edit" onClick={handleCancelUpdate}>
          Cancel Edit
        </button>
      )}
    </div>
  );
}
