import React from "react"
import css from './InstagramWidget.module.css'
import {womanImg1, womanImg2, womanImg3, womanImg4, womanImg5, womanImg6} from "../../image";

export const InstagramWidget = () => {
    return (
        <div className='display-flex direction-column justify-between'>
            <div className={`${css.instaName} font-serif display-flex justify-center`}>
                Follow our
                <a href="">@instagram_name</a>
            </div>
            <div className={`${css.photoHeight} display-flex align-center`}>
                <img src={womanImg1} className={`${css.photo} m-r-20`}/>
                <img src={womanImg2} className={`${css.photo} m-r-20`}/>
                <img src={womanImg3} className={`${css.photo} m-r-20`}/>
                <img src={womanImg4} className={`${css.photo} m-r-20`}/>
                <img src={womanImg5} className={`${css.photo} m-r-20`}/>
                <img src={womanImg6} className={css.photo}/>
            </div>
        </div>
    )
}