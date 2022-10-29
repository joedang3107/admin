import axios from 'axios'
import { getToken } from '../helpers/storage'
let base_api = "https://admin-api-ims.herokuapp.com"

//set request headers
export const setAxiosToken = () => {
    let token = getToken()
    axios.defaults.headers.common.authorization = `Bearer ${token}`
}

setAxiosToken()

function login(data) {
    return axios.post(`${base_api}/auth/login`, data).then((res) => {
        return res.data
    })
}


function fetchProjects(data) {
    return axios.get(`${base_api}/projects?_page=${data._page}&_limit=${data._limit}&q=${data.keyword}`).then(res => {
        return { list: res.data, total: res.headers["x-total-count"] }
    })
}

function fetchKpi(data) {
    return axios.get(`${base_api}/kpi`, data).then(res => {
        return res.data
    })
}

function fetchPfms1(data) {
    return axios.get(`${base_api}/performance1?_page=${data._page}&_limit=${data._limit}`).then(res => {
        return { list: res.data, total: res.headers["x-total-count"] }
    })
}

function fetchPfms2(data) {
    return axios.get(`${base_api}/performance2?_page=${data._page}&_limit=${data._limit}`).then(res => {
        return { list: res.data, total: res.headers["x-total-count"] }
    })
}

function fetchPfms3(data) {
    return axios.get(`${base_api}/performance3?_page=${data._page}&_limit=${data._limit}`).then(res => {
        return { list: res.data, total: res.headers["x-total-count"] }
    })
}

function fetchPfms4(data) {
    return axios.get(`${base_api}/performance4?_page=${data._page}&_limit=${data._limit}`).then(res => {
        return { list: res.data, total: res.headers["x-total-count"] }
    })
}

// add pfm
function addPfm1(data) {

    return axios.post(`${base_api}/performance1`, data).then(res => {
        return res.data
    })
}

function addPfm2(data) {

    return axios.post(`${base_api}/performance2`, data).then(res => {
        return res.data
    })
}

function addPfm3(data) {

    return axios.post(`${base_api}/performance3`, data).then(res => {
        return res.data
    })
}

function addPfm4(data) {

    return axios.post(`${base_api}/performance4`, data).then(res => {
        return res.data
    })
}

// delete pfm

function deletePfm1(id) {
    console.log(id)

    return axios.delete(`${base_api}/performance1/${id}`).then(res => {
        return res.data
    })
}

function deletePfm2(id) {
    console.log(id)

    return axios.delete(`${base_api}/performance2/${id}`).then(res => {
        return res.data
    })
}

function deletePfm3(id) {
    console.log(id)

    return axios.delete(`${base_api}/performance3/${id}`).then(res => {
        return res.data
    })
}

function deletePfm4(id) {
    console.log(id)

    return axios.delete(`${base_api}/performance4/${id}`).then(res => {
        return res.data
    })
}

// edit pfm 

function editPfm1(data) {
    let { id } = data

    return axios.put(`${base_api}/performance1/${id}`, data).then(res => {
        return res.data
    })
}

function editPfm2(data) {
    let { id } = data

    return axios.put(`${base_api}/performance2/${id}`, data).then(res => {
        return res.data
    })
}

function editPfm3(data) {
    let { id } = data

    return axios.put(`${base_api}/performance3/${id}`, data).then(res => {
        return res.data
    })
}


function editPfm4(data) {
    let { id } = data

    return axios.put(`${base_api}/performance4/${id}`, data).then(res => {
        return res.data
    })
}


// fetch pfm

function fetchPfm1(id) {
    return axios.get(`${base_api}/performance1/${id}`).then(res => {
        return res.data
    })
}

function fetchPfm2(id) {
    return axios.get(`${base_api}/performance2/${id}`).then(res => {
        return res.data
    })
}

function fetchPfm3(id) {
    return axios.get(`${base_api}/performance3/${id}`).then(res => {
        return res.data
    })
}

function fetchPfm4(id) {
    return axios.get(`${base_api}/performance4/${id}`).then(res => {
        return res.data
    })
}


// fetch user

function fetchUser(data) {
    return axios.get(`${base_api}/user`, data).then(res => {
        return res.data
    })
}

// update password

function updatePassword(data) {
    // const { id } = data
    console.log(data)
    return axios.put(`${base_api}/password`, data).then(res => {
        return res.data
    })
}

// fetch password

function fetchPassword(data) {
    
    console.log(data)
    return axios.get(`${base_api}/password`, data).then(res => {
        return res.data
    })
}

export { login, fetchProjects, fetchKpi, fetchPfms1, fetchPfms2, fetchPfms3, fetchPfms4, fetchUser, updatePassword, fetchPassword, addPfm1, addPfm2, addPfm3, addPfm4, deletePfm1, deletePfm2, deletePfm3, deletePfm4, editPfm1, editPfm2, editPfm3, editPfm4, fetchPfm1, fetchPfm2, fetchPfm3, fetchPfm4 }