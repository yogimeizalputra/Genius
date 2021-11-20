import React, { useState } from 'react'
import PortofolioList from '../portofolioList/PortofolioList';
import './portofolio.scss'

const Portofolio = () => {

    const [selected, setSelected] = useState("featured");

    const list = [
        {
          id: "featured",
          title: "Featured",
        },
        {
          id: "web",
          title: "Web App",
        },
        {
          id: "mobile",
          title: "Mobile App",
        },
        {
          id: "design",
          title: "Design",
        },
        {
          id: "content",
          title: "Content",
        },
    ];

    return (
        <div className="portofolio" id="portofolio">
            <h1>Portofolio</h1>
            <ul>
            {list.map((item) => (
                <PortofolioList
                    title={item.title}
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}
                />
            ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU" alt="" />
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    )
}

export default Portofolio
