import React from 'react'
import { useParams } from 'react-router-dom'

export const AboutItem = () => {

  const params = useParams()

  return (
    <div>
        Pagina about
        <h1>Sobre {params.slug}</h1>

        <p>valores dinamicos</p>
        
    </div>
  )
}
