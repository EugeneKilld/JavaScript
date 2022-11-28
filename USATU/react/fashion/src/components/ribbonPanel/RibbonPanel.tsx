import React from "react"
import css from './RibonPanel.module.css'
import {
    behanceLoge,
    dribbleLogo,
    facebookLogo, googleLogo, instagramLogo,
    pinterestLogo,
    rightNews1,
    rightNews2,
    rightNews3,
    rightNews4, twitterLogo,
    vimeoLogo, yotubeLogo
} from "../../image";

export const RibbonPanel = () => {
    return (
        <div className='display-flex'>
            <div className={css.contentRightRibbon}>
                <button className='btn m-b-20'>About the author</button>
                <div className='m-b-70'>
                    <img src={rightNews1} alt=""/>
                    <div
                        className={`${css.border} text-center display-flex direction-column align-center font-serif`}>
                        <div className={css.ribbonNewsAuthorName}>Kate Willems</div>
                        <div className={css.newsStyleItalic}>Food & cooking bloger</div>
                        <div className={`${css.ribbonNewsText} font-sans`}>Hi, I'm Sonia. Cooking is the way I
                            express my creative
                            side to the world. Welcome to my Kitchen Corner on…
                        </div>
                        <hr className={css.border}/>
                        <div className={css.reference}>
                            <a href="#" className="color-gold">continue reading</a>
                        </div>
                    </div>
                </div>
                <button className='btn m-b-20'>Featured posts</button>
                <div className='m-b-30'>
                    <img src={rightNews2} alt=""/>
                    <div className={`${css.border} text-center display-flex direction-column align-center`}>
                        <div className={`${css.ribbonNewsTitleDirection} font-sans color-gold`}>
                            tourism
                        </div>
                        <div className={`${css.ribbonNewsTitleText} font-serif`}>
                            One of Saturn`s largest rings may be newer than anyone
                        </div>
                        <div className={`${css.ribbonNewsSignature} display-flex justify-between font-serif`}>
                            <div>June 6, 2019</div>
                            <div>By Rickie Baroch</div>
                        </div>
                    </div>
                </div>
                <div className="m-b-30">
                    <img src={rightNews3} alt=""/>
                    <div className={`${css.border} text-center display-flex direction-column align-center`}>
                        <div className={`${css.ribbonNewsTitleDirection} font-sans color-gold`}>
                            city
                        </div>
                        <div className={`${css.ribbonNewsTitleText} font-serif`}>
                            One of Saturn`s largest rings may be newer than anyone
                        </div>
                        <div className={`${css.ribbonNewsSignature} display-flex justify-between font-serif`}>
                            <div>June 6, 2019</div>
                            <div>By Rickie Baroch</div>
                        </div>
                    </div>
                </div>
                <div className="m-b-70">
                    <img src={rightNews4} alt=""/>
                    <div className={`${css.border} text-center display-flex direction-column align-center`}>
                        <div className={`${css.ribbonNewsTitleDirection} font-sans color-gold`}>
                            Photography
                        </div>
                        <div className={`${css.ribbonNewsTitleText} font-serif`}>
                            One of Saturn`s largest rings may be newer than anyone
                        </div>
                        <div className={`${css.ribbonNewsSignature} display-flex justify-between font-serif`}>
                            <div>June 6, 2019</div>
                            <div>By Rickie Baroch</div>
                        </div>
                    </div>
                </div>
                <button className="btn">Categories</button>
                <div className="m-b-70">
                    <div
                        className={`${css.category} border-bottom display-flex justify-between align-center font-serif`}>
                        <div>Fashion</div>
                        <div>(23)</div>
                    </div>
                    <div
                        className={`${css.category} border-bottom display-flex justify-between align-center font-serif`}>
                        <div>Style & clothes</div>
                        <div>(7)</div>
                    </div>
                    <div
                        className={`${css.category} border-bottom display-flex justify-between align-center font-serif`}>
                        <div>Minimalism</div>
                        <div>(16)</div>
                    </div>
                    <div
                        className={`${css.category} border-bottom display-flex justify-between align-center font-serif`}>
                        <div>Black & White</div>
                        <div>(5)</div>
                    </div>
                    <div className={`${css.category} border-bottom display-flex justify-between align-center font-serif`}>
                        <div>Modern clothes</div>
                        <div>(12)</div>
                    </div>
                </div>
                <button className='btn m-b-20'>Social media</button>
                <div className='m-b-70'>
                    <div className='display-flex justify-between m-b-3'>
                        <button
                            className={`${css.mediaBtn} display-flex direction-column align-center justify-center`}>
                            <img src={facebookLogo} alt=""/>
                            <div className={`${css.mediaBtnText} font-sans`}>
                                <div>32k</div>
                                <div>likes</div>
                            </div>
                        </button>
                        <button
                            className={`${css.mediaBtn} display-flex direction-column align-center justify-center`}>
                            <img src={pinterestLogo} alt=""/>
                            <div className={`${css.mediaBtnText} font-sans`}>
                                <div>814</div>
                                <div>followers</div>
                            </div>
                        </button>
                        <button
                            className={`${css.mediaBtn} display-flex direction-column align-center justify-center`}>
                            <img src={vimeoLogo} alt=""/>
                            <div className={`${css.mediaBtnText} font-sans`}>
                                <div>165</div>
                                <div>followers</div>
                            </div>
                        </button>
                    </div>
                    <div className="display-flex justify-between m-b-3">
                        <button
                            className={`${css.mediaBtn} display-flex direction-column align-center justify-center`}>
                            <img src={dribbleLogo} alt=""/>
                            <div className={`${css.mediaBtnText} font-sans`}>
                                <div>6k</div>
                                <div>followers</div>
                            </div>
                        </button>
                        <button
                            className={`${css.mediaBtn} display-flex direction-column align-center justify-center`}>
                            <img src={twitterLogo} alt=""/>
                            <div className={`${css.mediaBtnText} font-sans`}>
                                <div>130k</div>
                                <div>followers</div>
                            </div>
                        </button>
                        <button
                            className={`${css.mediaBtn} display-flex direction-column align-center justify-center`}>
                            <img src={behanceLoge} alt=""/>
                            <div className={`${css.mediaBtnText} font-sans`}>
                                <div>37k</div>
                                <div>followers</div>
                            </div>
                        </button>
                    </div>
                    <div className="display-flex justify-between">
                        <button
                            className={`${css.mediaBtn} display-flex direction-column align-center justify-center`}>
                            <img src={instagramLogo} alt=""/>
                            <div className={`${css.mediaBtnText} font-sans`}>
                                <div>854k</div>
                                <div>followers</div>
                            </div>
                        </button>
                        <button
                            className={`${css.mediaBtn} display-flex direction-column align-center justify-center`}>
                            <img src={yotubeLogo} alt=""/>
                            <div className={`${css.mediaBtnText} font-sans`}>
                                <div>52k</div>
                                <div>subscribers</div>
                            </div>
                        </button>
                        <button
                            className={`${css.mediaBtn} display-flex direction-column align-center justify-center`}>
                            <img src={googleLogo} alt=""/>
                            <div className={`${css.mediaBtnText} font-sans`}>
                                <div>642</div>
                                <div>followers</div>
                            </div>
                        </button>
                    </div>
                </div>
                <button className='btn'>Tags</button>
                <div>
                    <button className={css.tag}>Business</button>
                    <button className={css.tag}>Freelance</button>
                    <button className={css.tag}>Money</button>
                    <button className={css.tag}>Experience</button>
                    <button className={css.tag}>Lifestyle</button>
                    <button className={css.tag}>SEO</button>
                    <button className={css.tag}>Wordpress</button>
                    <button className={css.tag}>Marketing</button>
                    <button className={css.tag}>UX</button>
                    <button className={css.tag}>Modern</button>
                    <button className={css.tag}>Success</button>
                    <button className={css.tag}>Nature</button>
                </div>
            </div>
        </div>
    )
}