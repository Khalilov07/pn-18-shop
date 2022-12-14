import axios from 'axios'

// https://whispering-river-87788.herokuapp.com/api/product - API ARSEN


const PRODUCTS_URL = "http://localhost:3002/posts"

const getProducts = () => {
    return axios.get(PRODUCTS_URL)
}

const getProduct = (id) => {
    return axios.get(PRODUCTS_URL + "/" + id)
}

const createPost = (newPost) => {
    return axios.post(PRODUCTS_URL, newPost)
}

export default { getProducts, getProduct, createPost }