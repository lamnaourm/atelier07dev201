import React, { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { ImCancelCircle } from 'react-icons/im'
import {GrAdd} from 'react-icons/gr'

export default function TodoListApp() {

    const [taches, setTaches] = useState([
        { description: 'Réviser HTML/CSS', completed: true },
        { description: 'Réviser mongodb', completed: false },
        { description: 'Réviser javascript', completed: true }
    ])
    const [task, setTask] = useState('')

    const addTache = () => {
        if(task.trim().length===0) {
            alert('Description vide')
            return;
        }

        if(taches.filter(t => t.description.toLowerCase()===task.toLowerCase()).length>0){
            alert('Tache existe deja')
            return;
        }

        setTaches(taches => [...taches, {description:task, completed:false}])
        setTask('')
        document.getElementById('task').focus();
    }
    return (
        <div className='app'>
            <fieldset>
                <legend>Ajout</legend>
                <input type="text" name="task" id="task" value={task} onChange={(e) => setTask(e.target.value)} />
                <button onClick={addTache}><GrAdd/> Add</button>
            </fieldset>
            <div className='list'>
                {taches.map(t =>
                    <div className='tache'>
                        <h4>{t.description}</h4>
                        {
                            t.completed ? <AiOutlineCheck /> : <ImCancelCircle />
                        }
                    </div>
                )}
            </div>
        </div>
    )
}
