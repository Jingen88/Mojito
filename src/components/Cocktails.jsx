import React from 'react'
import { mockTailLists } from '../../constants'


const Cocktails = () => {
  return (
    <section id="cocktails" className="noisy">
        <img id="c-left-leaf" src="/images/cocktail-left-leaf.png" alt="left leaf" className="left-leaf" />
        <img id="c-right-leaf" src="/images/cocktail-right-leaf.png" alt="right leaf" className="right-leaf" />

<div className='list'>
    <div className='loved'>
        <h2>Most loved mocktails:</h2>
        <ul>
            {mockTailLists.map(({name, country, detail, price}) => (
                <li key={name}>
                    <div className='md:me-28'>
                        <h3>{name}</h3>
                        <p>{country} | { detail}</p>
                    </div>
                    <span>- {price}</span>
                </li>
            ))}
        </ul>

    </div>

</div>


    </section>
  )
}

export default Cocktails