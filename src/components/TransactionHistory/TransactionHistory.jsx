import capitalizeFirstLetter from "../../helpers/capitalize-first-letter";
import s from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th className={s.tittle}>Type</th>
          <th className={s.tittle}>Amount</th>
          <th className={s.tittle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr>
            <td className={s.type} key={item.id}>
              {capitalizeFirstLetter(item.type)}
            </td>
            <td className={s.amount}>{item.amount}</td>
            <td className={s.currency}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
