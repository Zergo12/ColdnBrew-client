import axios from "axios"

const baseURL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005"
const reviewURL = baseURL + "/review"

const reviewsService = axios.create({ baseURL: reviewURL })


export const getAllReviews = async () => await reviewsService.get('/reviews')

export const getReviewByID = async (id) =>
	await reviewsService.get(`/review/${id}`)

export const createReview = async (reviewData) =>
	await reviewsService.post("/review/create", reviewData)

