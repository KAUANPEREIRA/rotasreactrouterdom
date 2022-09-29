import React from 'react'
import {Link} from "react-router-dom"

export const About = () => {
  return (
    <div>
        Pagina about
        <h1>Lista dos envolvidos</h1>
        <ul>
          <li><Link to={"pedro"}>Pedro</Link></li>
          <li><Link to={"kauan"}>Kauan</Link></li>
        </ul>
    </div>
  )
}
