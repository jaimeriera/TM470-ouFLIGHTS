import React from "react";
import img from '../../Assets/ouFLIGHTSlogo.png'

const Header = () => {
    return (
        <section className="Header">
            <header className="navBar">
                <div className="logoDiv">
                    <img src={img} alt="ouFLIGHTSlogo" className="logoImg"></img>
                </div>
            </header>
        </section>
    )
}

export default Header