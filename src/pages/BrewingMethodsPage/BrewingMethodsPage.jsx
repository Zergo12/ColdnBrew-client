import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Box from '../../components/Box/Box'
import './BrewingMethods.css'
import { getAllItems } from '../../services/items.service'

export const allItemsLoader = async () => {
  const {data: items} = await getAllItems()
  return {items}
}

function BrewingMethodsPage() {
  const { items } = useLoaderData()
  console.log(items)
  return (
    <div className='boxes'>
    <h3>Brewing Methods</h3>
      <div className='barraBtn'>
        <Link to={"/create"}>
        <button>
            Add Item
        </button>
        </Link>
      </div>
      <div className='cards'>
        {items.map((item) => (
          <Link key={item._id} to={`/${item._id}`}>
            <Box {...item}/>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BrewingMethodsPage