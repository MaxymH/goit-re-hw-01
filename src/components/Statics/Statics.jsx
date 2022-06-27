import PropTypes from "prop-types";

import s from './statics.module.css'

export default function Statics(props) {
    const { title, stats } = props
    
    const element = stats.map(stats => {
        const { label, id, percentage } = stats
        return(<li key={id}  className={s.item} >
        <span className={s.label}>{label}</span>
        <span className="percentage">{percentage}%</span>
        </li>)
       
    })
    
    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title}</h2>}
            <ul className={s.stat_list}>{element}</ul>
            </section>
    )
}

Statics.defaultProps = {
    stats: [],
};

Statics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })
    )
};