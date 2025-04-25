import * as Sentry from "@sentry/react";
import pkg from '../../package.json'

Sentry.init({
  dsn: "https://9930d7c2a73977ec021263b082d7d023@o4507248999989248.ingest.us.sentry.io/4509210525892608",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration()
  ],
  environment: import.meta.env.MODE, // env === 'dev' ? 1.0 : 0.1,
  release: pkg.version,
  tracesSampleRate: 1,
  // tracePropagationTargets: ['localhost],
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0 // If you're not already sampling the entire session, change the sample ra
});