import {
    onFetch,
    createJobCard,
    addFilter,
    removeFilter,
    clearAllFilters,
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

// onClick event

const bodyElement = document.querySelector('body')
bodyElement.addEventListener('click', (e) => {
    if(e.target.localName === 'li') addFilter(e.target.innerText)
    if(e.target.className === 'clear') clearAllFilters()
    if(e.target.alt === 'remove') removeFilter(e.target)
})

