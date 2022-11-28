import React, {useEffect, useState} from "react"
import {DefaultModal} from "../defaultModal/DefaultModal"
import { getAllPockemons } from "../../core/Api/Pockemon"
import { PockemonsPack } from "../../core/types"
import {TextField} from "@consta/uikit/TextField"
import {Button} from "@consta/uikit/Button"
import css from './PockemonsListModal.module.css'

interface IPockemonsListModal {
    closeModal: () => void
}

export const PockemonsListModal: React.FC<IPockemonsListModal> = ({closeModal}) => {
    const [pockemonsList, setPockemonsList] = useState<PockemonsPack[]>([])

    useEffect(() => {
        getAllPockemons(setPockemonsList)
    })

    return (
        <DefaultModal modalName={'Покемоны'} closeModal={closeModal}>
            <div className="display-flex">
                <div>
                    {pockemonsList.map(pockemon => (
                        <div className='display-flex justify-between'>
                            <div>{pockemon.name}</div>
                        </div>
                    ))}
                </div>
                <div className={css.searchBox}>
                    <div className="display-flex">
                        <TextField></TextField>
                        <Button label="искать"/>
                    </div>
                </div>
            </div>
        </DefaultModal>
    )
}