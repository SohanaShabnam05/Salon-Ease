import React from 'react';
import './Question.css';
import { useState } from 'react';
import ItemDetails from './ItemDetails';

const Facial = () =>  {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if(selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }


    

  return (
    <div>
        {/* left side */}
    <div className="box-face">   
      <div className="wrapper">
        <div className="accordion">
            {data.map((item, i) => (
                <div className="item">
                    <div className="title" onClick={() => toggle(i)}>
                        <h2>{item.question}</h2>
                        <span>{selected === i ? '-': '+' }</span>
                    </div>
                    <div className={selected === i ? 'content show' : 'content'}
                    >
                    {item.answer}
                    </div>
                    
                </div>
            ))}
            </div>
      </div>
    </div>

{/* right side */}
                <ItemDetails />

    </div>
  )
}

const data = [
    {
        question: 'Beast Seller',
        answer:
            'Lorem ipsum dolor '

    },
    {
        question: 'create your own packege',
        answer:
            'SalonEase offers'

    },
    {
        question: 'Create your own package',
        answer:
            'Lorem ipsum dolor'

    },
    {
        question: 'Waxing',
        answer:
            'Lorem ipsum '

    },
    {
        question: 'Facial service 1',
        answer:
            'Lorem '

    },
]

export default Facial;