import React, { useState } from 'react'
import {AiOutlineCheck} from 'react-icons/ai'
import {ImCancelCircle} from 'react-icons/im'

export default function TodoListApp() {

    const [taches, setTaches] = useState([
        {description:'Réviser HTML/CSS', completed:true},
        {description:'Réviser mongodb', completed:false},
        {description:'Réviser javascript', completed:true}
    ])

  return (
    <div>
        {taches.map(t =>
            <div className='tache'>
                <h4>{t.description}</h4>
                {
                    t.completed ? <AiOutlineCheck /> : <ImCancelCircle />
                }
            </div>
        )}
    </div>
  )
}
