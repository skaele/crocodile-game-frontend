import { attach, createEvent, createStore, sample, Unit } from 'effector'
import { Action, createBrowserHistory, History, Location, To } from 'history'
import { matchPath } from 'react-router'

import { appStarted } from '@shared/config/system-events/app-started'

// FIXME: rollback to v5 router dom or use atomic-router (better)

export const history = createBrowserHistory()

interface HistoryUpdated {
    location: Location
    action: Action
}

export const historyUpdated = createEvent<HistoryUpdated>()

export const createPathMatcher = (config: { path: string; clock?: Unit<HistoryUpdated> }) => {
    return sample({
        source: historyUpdated,
        clock: config.clock ?? historyUpdated,
        fn: (update) => {
            const { location } = update

            return location ? matchPath(location.pathname, config.path) : null
        },
    }).filterMap((match) => (match ? match : undefined))
}

const $history = createStore<History>(history)

$history.watch(appStarted, (history) => {
    historyUpdated({ location: history.location, action: history.action })
    history.listen(() => {
        historyUpdated({ location: history.location, action: history.action })
    })
})

// eslint-disable-next-line no-console
history.listen(console.log)

export const fxPush = attach({
    source: $history,
    effect: (history, params: To) => {
        history.push(params)
    },
})

// Пример использования
// Слушаем матчинг на твой "/"
const rootMatched = createPathMatcher({ path: '' })

// eslint-disable-next-line no-console
rootMatched.watch(() => console.log('root matched'))

// если событие случилось, значит сматчилось
//
// можем сделать любое действие через эффектор
// например, вызвать эффект редиректа
// sample({
//     clock: rootMatched,
//     target: fxPush.prepend(() => ({ pathname: '/home' })),
// }).watch(() => {
//     console.log('redirected from root to home')
// })
