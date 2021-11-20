import React from 'react'
import './portofolio.scss'

const Portofolio = () => {
    return (
        <div className="portofolio" id="portofolio">
            <h1>Portofolio</h1>
            <ul>
                <li className="active">Featured</li>
                <li>Web App</li>
                <li>Mobile App</li>
                <li>Design</li>
                <li>Branding</li>
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
