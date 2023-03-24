import {
    onFetch,
    createJobCard,
    filterJobs,
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
const filterDiv = document.querySelector('.filter-div')

const bodyElement = document.querySelector('body')
bodyElement.addEventListener('click', (e) => {
    if(e.target.localName === 'li') filterJobs(e.target.innerText)
    if(e.target.className === 'clear') filterDiv.classList.remove('active')
})

