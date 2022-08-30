import React from 'react'
import Tour from "./Tour"

function Tours({tours}) {
    return (
        <section>
            {tours.map((tour) => {
            return <Tour key={tour.id} {...tour}></Tour>})}
        </section>
    )        
}

export default Tours