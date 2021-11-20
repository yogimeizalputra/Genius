import React from 'react'
import './portofolioList.scss'

const PortofolioList = ({ title, id, active, setSelected }) => {
    return (
        <li className={active ? "portofolioList active" : "portofolioList"} onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}

export default PortofolioList
