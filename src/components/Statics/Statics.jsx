import PropTypes, { element } from "prop-types";

import s from './statics.module.css'

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export default function Statics(props) {
    const { title, stats } = props
    
    const element = stats.map(stats => {
        
        return(<li key={stats.id}  className={s.item} >
        <span className={s.label}>{stats.label}</span>
        <span className="percentage">{stats.percentage}%</span>
        </li>)
        
    })
    
    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title}</h2>}
            <ul className={s.stat_list}>{element}</ul>
            </section>
    )
}




Statics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired
}