import PropTypes from "prop-types";
import s from './transactions.module.css'
export default function TransactionHistory(props) {
    
    const element = props.items.map(
        data => {
            const {id, type, amount , currency} = data
            return (
                <tr className={s.list} key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
            )
        }
    )
    return (
        <table className={s.transaction_history}>
    <thead>
    <tr className={s.titleColumn}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
    </tr>
    </thead>

    <tbody>
    {element}
    </tbody>
</table>
    )
}

TransactionHistory.defaultProps = {
    items: []
}

TransactionHistory.prototype = {
    props: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired
    })
}