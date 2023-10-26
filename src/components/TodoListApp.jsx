import React, { useState } from 'react'
import { AiOutlineCheck, AiOutlineDelete } from 'react-icons/ai'
import { ImCancelCircle } from 'react-icons/im'
import { GrUpdate } from 'react-icons/gr'
import AddTache from './AddTache'
import DeleteTaches from './DeleteTaches'
import ModifTaches from './ModifTaches'

export default function TodoListApp() {

    const [taches, setTaches] = useState([
        { description: 'Réviser HTML/CSS', completed: true },
        { description: 'Réviser mongodb', completed: false },
        { description: 'Réviser javascript', completed: true }
    ])
    const [task, setTask] = useState('')

    const addTache = () => {
        if (task.trim().length === 0) {
            alert('Description vide')
            return;
        }

        if (taches.filter(t => t.description.toLowerCase() === task.toLowerCase()).length > 0) {
            alert('Tache existe deja')
            return;
        }

        setTaches(taches => [...taches, { description: task, completed: false }])
        setTask('')
        document.getElementById('task').focus();
    }

    const deleteAll = () => {
        setTaches([])
    }

    const deleteTermine = () => {
        setTaches(taches => taches.filter(t => !t.completed))
    }

    const deleteEncours = () => {
        setTaches(taches => taches.filter(t => t.completed))
    }

    const modifAllTermine = () => {
        setTaches(taches => taches.map(t => ({ ...t, completed: true })))
    }

    const modifAllEncours = () => {
        setTaches(taches => taches.map(t => ({ ...t, completed: false })))
    }

    const deleteTache = (ind) =>{
        setTaches(taches => taches.filter((t, index) => index!== ind))
    }

    const modifTache = (ind) => {
        setTaches(taches => taches.map((t, index) => index===ind? {...t, completed:!t.completed} : t))
    }

    return (
        <div className='app'>
            <div className='operations'>
                <AddTache task={task} hchange={(e) => setTask(e.target.value)} addTache={addTache}/>
                <DeleteTaches deleteAll={deleteAll} deleteTermine={deleteTermine} deleteEncours={deleteEncours}/>
                <ModifTaches modifAllEncours={modifAllEncours} modifAllTermine={modifAllTermine}/>
            </div>
            <div className='display'>
                <div className='stats'>
                    <ul>
                        <li>Nombre de taches : {taches.length}</li>
                        <li>Nombre de terminé : {taches.filter(t => t.completed).length}</li>
                        <li>Nombre de En cours : {taches.filter(t => !t.completed).length}</li>
                    </ul>
                </div>
                <div className='list'>
                    {taches.map((t, index) =>
                        <div key={index} className='tache'>
                            <h4>{
                                t.completed ? <AiOutlineCheck /> : <ImCancelCircle />
                            } {t.description}
                            </h4>
                            <div className='btns'>
                                <button onClick={() => modifTache(index)}><GrUpdate/></button>
                                <button onClick={() => deleteTache(index)}><AiOutlineDelete/></button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
