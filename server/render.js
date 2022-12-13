import * as React from 'react'
import ReactDOMServer from 'react-dom/server'

import Html from './Html'
import App from '../src/App'

const render = async (res) => {
    const html = ReactDOMServer.renderToString(
        <Html>
            <App/>
        </Html>,
    )

    res.send(html)
}

export default render
