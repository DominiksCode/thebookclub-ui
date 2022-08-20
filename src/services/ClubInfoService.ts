import axios, { AxiosResponse } from 'axios'
import { User } from '../models/user'
import { Session } from '../models/session'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/DominiksCode/thebookclub-ui',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getUsers(): Promise<AxiosResponse<User[]>> {
    return apiClient.get('/users')
  },
  getUser(id: string): Promise<AxiosResponse<User>> {
    return apiClient.get(`/users/${id}`)
  },
  getSessions(): Promise<AxiosResponse<Session[]>> {
    return apiClient.get('/sessions')
  },
  getSession(id: string): Promise<AxiosResponse<Session>> {
    return apiClient.get(`/sessions/${id}`)
  }
}
