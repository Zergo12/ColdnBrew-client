import axios from "axios"

const baseURL = "http://localhost:5005/"
const itemUrl = baseURL + "item"

const itemService = axios.create({ baseURL: itemUrl })


export const getAllItems = async () => await itemService.get('/brewing-methods')

export const getAllRecipes = async () => await itemService.get('/recipes')

export const getItemByID = async (id) =>
	await itemService.get(`/${id}`)

export const createItem = async (itemData) =>
	await itemService.post("/create", itemData)

export const editItem = async (id, itemData) =>
	await itemService.put(`/edit/${id}`, itemData)

export const deleteItem = async (id) =>
	await itemService.post(`/delete/${id}`)



