import React, {useEffect, useState} from "react"
import css from './PostsArea.module.css'
// import {Pagination} from "../pagination/Pagination";
import {PockemonModal} from "../pockemonModal/PockemonModal";
import {
    PockemonInfo,
    PockemonModalType,
    PockemonsPack,
} from "../../core/types";
import {Pagination} from "@consta/uikit/Pagination";
import {useAppDispatch, useAppSelector} from "../../core/hooks/hooks";
import {loadPockemonsInfo} from "../../core/store/pockemons/pockemonsSlice";
import {getPockemonsInfo} from "../../core/Api";

export const PostsArea = () => {
    const [page, setPage] = useState(0)
    const [pockemonModal, setPockemonModal] = useState<PockemonModalType>({id: 0, isActive: false})
    const { pockemonsPack, pockemonsInfo} = useAppSelector(state => state.pockemonsReducer)
    const dispatch = useAppDispatch()
    const totalPages = 8
    const totalPosts = 12
    const pockemonsInfoSlice = pockemonsInfo.slice(page*totalPosts, (page+1)*totalPosts)
    const hotKeys = {
        prevPage: {
            label: '← Shift',
            values: ['Shift', 'ArrowLeft'],
        },
        nextPage: {
            label: 'Shift →',
            values: ['Shift', 'ArrowRight'],
        },
    };

    const ShowPockemonModal = (id: number) => {
        setPockemonModal({
            id: id,
            isActive: true,
        })
    }

    const ClosePockemonModal = () => {
        setPockemonModal({
            id: 0,
            isActive: false,
        })
    }

    const changePage = (pageNumber : number) => {
        setPage(pageNumber)
    }

    useEffect(() => {
        const pockemonInfoResolver = (response: PockemonInfo) => {
            dispatch(loadPockemonsInfo(response))
        }
        if (pockemonsInfo.length < (page + 1) * totalPosts) {
            console.log('lsd;alkd')
            const pockemonsPackSlice = pockemonsPack.slice(pockemonsInfo.length, (page + 1) * totalPosts)
            pockemonsPackSlice.forEach(pockemon => getPockemonsInfo(pockemon.url, pockemonInfoResolver))
        }
    },[page, pockemonsPack])

    return (
        <div className={'m-r-130'}>
            <div className={`${css.news} display-flex justify-between wrap`} >
                {pockemonsInfoSlice.map(pockemon => (
                        <div
                            className={`${css.smallNews}`}
                            key={pockemon.id}
                            onClick={() => ShowPockemonModal(pockemon.id)} >
                            <img src={pockemon.photoURL} alt="" width={370} height={280} className={css.postsPhoto}/>
                            <div className={`text-center display-flex direction-column align-center`}>
                                <div className={`${css.newsTitleDirection} color-gold`}>
                                    {pockemon.name}
                                </div>
                                <div className={`${css.newsTitleText}`}>
                                    {
                                        pockemon.abilities.map((ability, i) =>
                                            `Ability ${i+1} is ${ability.ability.name}. \r\n`)
                                    }
                                </div>
                                <div className={`${css.newsSignature} display-flex justify-between font-serif`}>
                                    <div>June 6, 2019</div>
                                    <div>By Rickie Baroch</div>
                                </div>
                            </div>
                        </div>
                ))}
            </div>
            <Pagination
                currentPage={page}
                onChange={changePage}
                totalPages={totalPages}
                hotkeys={hotKeys}
                minified
            />
            {/*<Pagination changePage={changePage} actualPage={page} />*/}
            {pockemonModal.isActive &&
                <PockemonModal closeModal={ClosePockemonModal} pockemonId={pockemonModal.id}/>}
        </div>
    )
}