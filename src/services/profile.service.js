import axios from "axios"

const baseURL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005"
const reviewURL = baseURL + "/profile"

const profileService = axios.create({ baseURL: reviewURL })

export const getProfile = async () => await profileService.get('/profile')

export const getProfileByID = async (id) =>
	await profileService.get(`/${id}`)

export const editProfile = async (id, profileData) =>
	await profileService.put(`/editProfile/${id}`, profileData)