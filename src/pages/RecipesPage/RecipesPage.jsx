import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Box from '../../components/Box/Box'
import { getAllRecipes } from '../../services/items.service'
import './RecipiesPage.css'

export const allRecipesLoader = async () => {
  const {data: items} = await getAllRecipes()
  return {items}
}

function RecipesPage() {
  const { items } = useLoaderData()
  return (
    <div className='boxes'>
    <h3>Recipes</h3>
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

export default RecipesPage