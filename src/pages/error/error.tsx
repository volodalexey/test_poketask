import { type FC } from 'react'
import { useRouteError } from 'react-router-dom'

export const ErrorPage: FC<{ error?: Error }> = ({ error } = {}) => {
  const _error = error ?? useRouteError() as Error

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p><i>{_error.message}</i></p>
      <pre>{_error.stack}</pre>
    </div>
  )
}
