import * as React from 'react'
import ReactDOMServer from 'react-dom/server'

import Html from './Html'
import App from '../src/App'
import { veryLongApiCall } from '../src/veryLongApiCall'

const render = async (res) => {
    const names = await veryLongApiCall()

    const html = ReactDOMServer.renderToString(
        <Html>
            <App names={names}/>
        </Html>,
    )

    res.send(html)
}

export default render
