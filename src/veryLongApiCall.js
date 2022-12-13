export const veryLongApiCall = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                '퀸잇',
                '팔도감',
                '마치모어',
            ])
        }, 3000)
    })
}
