import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'


export default function DeleteTaches(props) {
    return (
        <fieldset>
            <legend>Suppression</legend>
            <button onClick={props.deleteAll}><AiOutlineDelete /> Tous</button>
            <button onClick={props.deleteTermine}><AiOutlineDelete /> Terminé</button>
            <button onClick={props.deleteEncours}><AiOutlineDelete /> En cours</button>
        </fieldset>
    )
}
