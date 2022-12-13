import * as React from 'react'

const Html = ({ children, names }) => {
    // language=JavaScript
    const scriptForProperHydration = `window.MAEUM_DAERO_OBJECT = ${JSON.stringify({
        names,
    })}`

    return (
        <html>
        <head>
            <title>58000% 알아보기</title>
            <script dangerouslySetInnerHTML={{
                __html: scriptForProperHydration,
            }}/>
            <script defer src="/build/main.js"></script>
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
