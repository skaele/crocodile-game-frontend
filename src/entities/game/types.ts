import { DrawCoords } from '@entities/draw/types'

export interface Game {
    id: string
    name: string
    inProgressPoints: DrawCoords[]
}
