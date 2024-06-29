import { useDispatch } from "react-redux";
import deleteImage from "../../assets/images/delete.svg";
import editImage from "../../assets/images/edit.svg";
import {
  deleteTransaction,
  editActive,
} from "../../features/transaction/transactionSlice";

export default function Transaction({ transaction }) {
  const dispatch = useDispatch();
  return (
    <li className={`transaction ${transaction?.type}`}>
      <p>{transaction?.name}</p>
      <div className="right">
        <p>৳ {transaction?.amount}</p>
        <button
          className="link"
          onClick={() => dispatch(editActive(transaction))}
        >
          <img alt="Edit" className="icon" src={editImage} />
        </button>
        <button
          className="link"
          onClick={() => dispatch(deleteTransaction(transaction?.id))}
        >
          <img alt="Delete" className="icon" src={deleteImage} />
        </button>
      </div>
    </li>
  );
}
