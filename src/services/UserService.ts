import axios, { AxiosResponse } from 'axios'
import { User } from '../models/user'

const UserClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/DominiksCode/thebookclub-ui',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getUsers(): Promise<AxiosResponse<User[]>> {
    return UserClient.get('/users')
  },
  getUser(id: string): Promise<AxiosResponse<User>> {
    return UserClient.get(`/users/${id}`)
  }
}
