// Fetch Request function
export async function onFetch(url) {
  const response = await fetch(url)
  const json = await response.json()
  return json
}

// Creates a job card
export function createJobCard(obj, className) {

  const mainContainer = document.querySelector(`.${className}`)
  const jobContainer = document.createElement('div')
  jobContainer.classList.add('job-container')

  jobContainer.innerHTML = `
    <div class="job-container-info">
      <img src=${obj.logo} alt=${obj.company}>
      <div class="job-container-info-section">
        <div>
          <h2>${obj.company}</h2>
          <span class="new">NEW!</span>
          <span class="feat">FEATURED</span>
          </div>
        <h3>${obj.position}</h3>
        <ul>
          <li>${obj.postedAt}</li>
          <li class="circle"></li>
          <li>${obj.contract}</li>
          <li class="circle"></li>
          <li>${obj.location}</li>
        </ul>
      </div>
    </div>
    `

  const list = document.createElement('ul')
  list.classList.add('job-container-lang')
  list.innerHTML = `
        <li>${obj.role}</li>
        <li>${obj.level}</li>
    `

  obj.languages.forEach(language => {
    list.innerHTML += `<li>${language}</li>`
  })

  if (obj.tools) {
    obj.tools.forEach(tool => {
      list.innerHTML += `<li>${tool}</li>`
    })
  }

  const elementeSpan = jobContainer.childNodes[1].childNodes[3].childNodes[1].childNodes
  if (!obj.new) elementeSpan[3].remove()
  if (!obj.featured) {
    if (elementeSpan[4].nodeName === 'SPAN') elementeSpan[4].remove()
    else elementeSpan[5].remove()
  }

  jobContainer.appendChild(list)
  mainContainer.appendChild(jobContainer)

}

// Filters job's list

let jobs = []

export function addFilter(element) {
  const filterDiv = document.querySelector('.filter-div')
  filterDiv.classList.add('active')

  const container = document.querySelector('.filter-div div')
  const filter = document.createElement('div')
  filter.classList.add('filter')
  filter.innerHTML = `
                  <span class="text">${element}</span>
                  <span class="x"> <img width="14px" src="./images/icon-remove.svg" alt="remove"> </span>
  `
  jobs.push(element)
  console.log(jobs)
  container.appendChild(filter)
}

export function removeFilter(element){
  element.parentElement.parentElement.remove()
  const elementName = element.parentElement.parentElement.children[0].innerText
  const index = jobs.indexOf(elementName)
  jobs.splice(index,1)
  console.log(jobs)
}

export function clearAllFilters() {
  const filterDiv = document.querySelector('.filter-div')
  const container = document.querySelector('.filter-div div')
  container.innerHTML = ''
  jobs = []
  filterDiv.classList.remove('active')
}