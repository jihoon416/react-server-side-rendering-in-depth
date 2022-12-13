import * as React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/App'

ReactDOM.hydrateRoot(
    document.getElementById('root'),
    <App names={window.MAEUM_DAERO_OBJECT.names}/>,
)
