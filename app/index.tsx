import React, { FC } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'

import App from 'App'
import { BrowserRouter as Router } from 'react-router-dom'

const Root: FC = () => {
    return (
        <Router>
            <App />
        </Router>
    )
}

const container = document.getElementById('root')!

if (container.hasChildNodes()) {
    hydrateRoot(container, <Root />, { onRecoverableError: () => {} })
} else {
    createRoot(container).render(<Root />)
}
