import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../../features/transaction/transactionSlice";
import Transaction from "./Transaction";

export default function Transactions() {
  const dispatch = useDispatch();
  const { transactions } = useSelector((state) => state.transaction);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);
  return (
    <>
      <p className="second_heading">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>
          {transactions.map((transaction) => (
            <Transaction transaction={transaction} />
          ))}
        </ul>
      </div>
    </>
  );
}
