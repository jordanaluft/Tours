import React from 'react'

function Tour(tours){
    return(
        <div className='card'>
            <img className='image' src={tours.image}/>
            <div className='tour--data'> 
                <div className='tour--title'>
                    <h3>{tours.name}</h3>
                    <h3 className='tour--price'>${tours.price}</h3>
                </div>
                <span className='tour--info'>{tours.info}</span>
            </div>
        </div>
        
    )
}

export default Tour