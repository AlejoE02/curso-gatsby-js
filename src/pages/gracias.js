import React from "react"
import {SEO} from '../components'
import {Button, Purchase} from '../styles/components'
import {Link} from 'gatsby'
export default () => {
  return (
  <div>
    <SEO tittle='Compra Exitosa'/>
    <Purchase>
      <h2>Compra Exitosa</h2>
      <p>Espero que disfrutes tu swag, lucelo con orgullo</p>
      <p>¡Te esperamos de vuelta, no pares de aprender!</p>
      <span rol='img' aria-label='emoji'> ❤</span>
      <Link ti='/'>
        <Button>Volver al Catalogo</Button>
      </Link>
    </Purchase>
  </div>
  )
}
