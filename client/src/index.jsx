// client/src/index.jsx
import React, { Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import Loading from './components/loading-spinner/Loading'

const App = lazy(() => import('./components/App'))

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </React.StrictMode>
)
