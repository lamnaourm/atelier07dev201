import React from 'react'

export default function ModifTaches(props) {
    return (
        <fieldset>
            <legend>modification</legend>
            <button onClick={props.modifAllTermine}><GrUpdate /> Terminé</button>
            <button onClick={props.modifAllEncours}><GrUpdate /> En cours</button>
        </fieldset>
    )
}
