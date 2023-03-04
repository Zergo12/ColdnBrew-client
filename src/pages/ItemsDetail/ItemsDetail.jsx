import React from 'react'
import { Form, Link, redirect, useLoaderData } from 'react-router-dom'
import { deleteItem, getItemByID } from '../../services/items.service'
import './ItemsDetail.css'

export const itemDetailsLoader = async({params:{ id }}) => { 
  const {data: item} = await getItemByID(id)
  return {item}
}

export const deleteItemAction = async ({params:{id}}) => { 
  await deleteItem (id)
  return redirect("/")
}

function ItemsDetail() {
  const {item} = useLoaderData()
  return (
    <div className='itemDetails'>
      <img src={item.image} alt={item.title}/>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <div className="buttons">
        <Link to={`/edit/${item._id}`}>
        <button className="editButton">Edit</button>
        </Link>
        <Form action={`/delete/${item._id}`} method='POST'>
          <button type="submit" className="deleteButton">Delete</button>
        </Form>
      </div>
    </div>
  )
}

export default ItemsDetail