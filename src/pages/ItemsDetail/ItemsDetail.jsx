import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { getItemByID } from '../../services/items.service'

export const itemDetailsLoader = async({params:{ id }}) => { console.log({params:{ id }})
  const {data: item} = await getItemByID(id)
  console.log (item) 
  return {item}
}

function ItemsDetail() {
  const {item} = useLoaderData()
  console.log (item) 
  return (
    <div>
      <img src={item.image} alt={item.title}/>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </div>
  )
}

export default ItemsDetail