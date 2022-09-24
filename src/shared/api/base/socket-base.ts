import API_URL from '@config/api-url'
import { io } from 'socket.io-client'

export const socket = io(API_URL)
