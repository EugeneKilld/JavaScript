import React from "react"
import css  from './Header.module.css'
import '../../index.css'

export const Header = () => {
    return (
        <div className={`${css.header} display-flex justify-between`}>
            <div className={`${css.headerLeftSide} font-serif`}>Fashion</div>
            <div className={`${css.headerRightSide} font-serif`}>
                <ul className={`${css.menu} display-flex justify-between`}>
                    <li>
                        <div>Home</div>
                    </li>
                    <li>
                        <div id="recipes">Recipes</div>
                    </li>
                    <li>
                        <div>Article</div>
                    </li>
                    <li>
                        <div id="contacts">Contact</div>
                    </li>
                    <li>
                        <div>Purchase</div>
                    </li>
                    <li>
                        <div id="aboutUs">About Us</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}