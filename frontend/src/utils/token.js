
export const getToken = () => {
    return localStorage.getItem('token')
}

export const getRole = () => {
    return localStorage.getItem('role')
}

export const setToken = (data) => {
    // console.log(data)
    localStorage.setItem('idUser', data.userId)
    localStorage.setItem('nama', data.nama)
    localStorage.setItem('email', data.email)
    localStorage.setItem('role', data.role)
    localStorage.setItem('token', data.token)
}