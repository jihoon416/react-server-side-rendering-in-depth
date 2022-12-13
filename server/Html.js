import * as React from 'react'

const Html = ({ children }) => {
    return (
        <html>
        <head>
            <title>58000% 알아보기</title>
        </head>

        <body>
        <div id="root">
            {children}
        </div>
        </body>
        </html>
    )
}

export default Html
