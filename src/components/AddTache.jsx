import React from 'react'
import { GrAdd } from 'react-icons/gr'


export default function AddTache(props) {
    return (
        <fieldset>
            <legend>Ajout</legend>
            <input type="text" name="task" id="task" value={props.task} onChange={props.hchange} />
            <button onClick={props.addTache}><GrAdd /> Add</button>
        </fieldset>
    )
}
