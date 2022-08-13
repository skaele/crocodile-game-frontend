import { appStarted } from '@config/system-events/app-started'
import { createEvent, createStore, forward, sample } from 'effector'
import { LoginInput, User } from './types'

const login = createEvent<LoginInput>()
const $user = createStore<User | null>(null)

sample({
    clock: appStarted,
    fn: () => {
        const userData = localStorage.getItem('crocodile-user')
        if (!userData) return null

        return JSON.parse(userData)
    },
    target: $user,
})

// TODO: use some effect to send request
forward({ from: login, to: $user })

// $user.watch((d) => console.log(d))
