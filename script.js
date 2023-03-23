import {
    onFetch,
    createJobCard,
} from './functions.js'

// OnLoad (DOMContentLoaded) Script
document.addEventListener('DOMContentLoaded', (e) => {
    
    const response = onFetch('./data.json')
    response.then(info => {
        info.forEach(array => {
            createJobCard(array,'main')
        })
    })

})
