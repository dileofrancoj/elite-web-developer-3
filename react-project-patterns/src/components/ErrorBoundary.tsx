import React from 'react'
import { type FallbackProps } from 'react-error-boundary'
import { sentryHub } from '../utils/sentryHub'

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallbackComponent?: React.ComponentType<FallbackProps>
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (e: unknown): ErrorBoundaryState {
    sentryHub.captureException(e)
    return { hasError: true }
  }

  render (): React.ReactNode {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) {
      return <h1>Ocurrió un error</h1>
    }

    return children
  }
}

export default ErrorBoundary
