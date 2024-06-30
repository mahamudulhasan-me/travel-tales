import { useSelector } from "react-redux";
import { formatNumberWithCommas } from "../utils/thusandSepertor";

export default function Balance() {
  const { transactions } = useSelector((state) => state.transaction);

  const calculateIncome = (transactions) => {
    let income = 0;
    transactions.forEach((transaction) => {
      const { type, amount } = transaction;

      if (type === "income") {
        income += amount;
      } else {
        income -= amount;
      }
    });
    return income;
  };

  return (
    <div className="top_card">
      <p>Your Current Balance</p>
      <h3>
        <span>৳</span>
        <span>
          {transactions.length
            ? formatNumberWithCommas(calculateIncome(transactions))
            : 0}
        </span>
      </h3>
    </div>
  );
}
