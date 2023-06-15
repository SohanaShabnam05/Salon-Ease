import React from 'react';
import './Question.css';
import { useState } from 'react';

const Question = () =>  {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if(selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }


  return (
    <div>
      <div className="wrapper">
      <div className="ask">
        Frequently asked questions
      </div>
        <div className="accordion"></div>
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
  )
}

const data = [
    {
        question: 'How does Salon Ease work?',
        answer:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, illum error harum rerum, nemo sed labore totam ea aliquid inventore exercitationem odio a dolores, quibusdam maiores. Doloribus nam quod iusto.'

    },
    {
        question: 'What services does SalonEase offer?',
        answer:
            'SalonEase offers a comprehensive range of beauty services, including haircuts, styling, coloring, skincare, facials, manicures, pedicures, makeup, waxing, and more. Please visit our Services page for a detailed list.                             '

    },
    {
        question: 'Are the SalonEase professionals experienced and trained?',
        answer:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, illum error harum rerum, nemo sed labore totam ea aliquid inventore exercitationem odio a dolores, quibusdam maiores. Doloribus nam quod iusto.'

    },
    {
        question: 'How does Salon Ease work?',
        answer:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, illum error harum rerum, nemo sed labore totam ea aliquid inventore exercitationem odio a dolores, quibusdam maiores. Doloribus nam quod iusto.'

    },
    {
        question: 'How does Salon Ease work?',
        answer:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, illum error harum rerum, nemo sed labore totam ea aliquid inventore exercitationem odio a dolores, quibusdam maiores. Doloribus nam quod iusto.'

    },
]

export default Question;