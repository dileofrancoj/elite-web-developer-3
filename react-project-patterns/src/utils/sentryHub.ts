import * as Sentry from '@sentry/react'

const sentryHub = {
    captureEvent: (message:string, data:any) => {
        Sentry.captureEvent({
            message,
            level: 'log',
            extra: data
        })
    },
    captureException: (ex:unknown) => {
        Sentry.captureException(ex)
    }
}

Object.freeze(sentryHub)

export { sentryHub }
