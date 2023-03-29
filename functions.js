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
  const mainContainer = document.querySelector(`.main`)
  mainContainer.innerHTML = ''

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

  let roles = ['Frontend', 'Backend', 'Fullstack']
  let roleArray = []

  let levels = ['Junior', 'Midweight', 'Senior']
  let levelArray = []

  let languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"]
  let languageArray = []

  let tools = ['React', 'Sass', 'Ruby', 'RoR', 'Vue', 'Django']
  let toolArray = []

  const response = onFetch('./data.json')
  response.then(info => {

    jobs.forEach(element => {
      if (roles.includes(element)) {
        const roleFilter = info.filter(info => info.role === element)
        roleFilter.forEach(role => {
          roleArray.push(role)
        })
      }
      if (levels.includes(element)) {
        const levelFilter = info.filter(info => info.level === element)
        levelFilter.forEach(level => {
          levelArray.push(level)
        })
      }
      if (languages.includes(element)) {
        const languageFilter = info.filter(info => info.languages.includes(element))
        languageFilter.forEach(language => {
          languageArray.push(language)
        })
      }
      if (tools.includes(element)) {
        const toolFilter = info.filter(info => info.tools.includes(element))
        toolFilter.forEach(tool => {
          toolArray.push(tool)
        })
      }
    })

    let finalArray = []
    const allArray = [roleArray, levelArray, languageArray, toolArray]
    const filledArray = allArray.filter(i => i.length !== 0)
    if (filledArray.length === 1) {
      finalArray = filledArray[0]
    } else if (filledArray.length === 2) {
      finalArray = filledArray[0].filter(i => filledArray[1].includes(i))
    } else if (filledArray.length === 3) {
      const intersection = filledArray[0].filter(i => filledArray[1].includes(i))
      finalArray = intersection.filter(i => filledArray[2].includes(i))
    } else {
      const intersection1 = filledArray[0].filter(i => filledArray[1].includes(i))
      const intersection2 = filledArray[2].filter(i => filledArray[3].includes(i))
      finalArray = intersection1.filter(i => intersection2.includes(i))
    }
    finalArray.forEach(array => {
      createJobCard(array, 'main')
    })
  })
  container.appendChild(filter)
}

export function removeFilter(element) {
  element.parentElement.parentElement.remove()
  const elementName = element.parentElement.parentElement.children[0].innerText
  const index = jobs.indexOf(elementName)

  const container = document.querySelector('.filter-div div')
  container.innerHTML = ''

  jobs.splice(index, 1)

  let roles = ['Frontend', 'Backend', 'Fullstack']
  let roleArray = []

  let levels = ['Junior', 'Midweight', 'Senior']
  let levelArray = []

  let languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"]
  let languageArray = []

  let tools = ['React', 'Sass', 'Ruby', 'RoR', 'Vue', 'Django']
  let toolArray = []

  const response = onFetch('./data.json')
  response.then(info => {

    jobs.forEach(element => {
      if (roles.includes(element)) {
        const roleFilter = info.filter(info => info.role === element)
        roleFilter.forEach(role => {
          roleArray.push(role)
        })
      }
      if (levels.includes(element)) {
        const levelFilter = info.filter(info => info.level === element)
        levelFilter.forEach(level => {
          levelArray.push(level)
        })
      }
      if (languages.includes(element)) {
        const languageFilter = info.filter(info => info.languages.includes(element))
        languageFilter.forEach(language => {
          languageArray.push(language)
        })
      }
      if (tools.includes(element)) {
        const toolFilter = info.filter(info => info.tools.includes(element))
        toolFilter.forEach(tool => {
          toolArray.push(tool)
        })
      }
    })

    let finalArray = []
    const allArray = [roleArray, levelArray, languageArray, toolArray]
    const filledArray = allArray.filter(i => i.length !== 0)
    if (filledArray.length === 1) {
      finalArray = filledArray[0]
    } else if (filledArray.length === 2) {
      finalArray = filledArray[0].filter(i => filledArray[1].includes(i))
    } else if (filledArray.length === 3) {
      const intersection = filledArray[0].filter(i => filledArray[1].includes(i))
      finalArray = intersection.filter(i => filledArray[2].includes(i))
    } else {
      const intersection1 = filledArray[0].filter(i => filledArray[1].includes(i))
      const intersection2 = filledArray[2].filter(i => filledArray[3].includes(i))
      finalArray = intersection1.filter(i => intersection2.includes(i))
    }
    finalArray.forEach(array => {
      createJobCard(array, 'main')
    })
  })
}

export function clearAllFilters() {
  const filterDiv = document.querySelector('.filter-div')
  const container = document.querySelector('.filter-div div')
  container.innerHTML = ''
  jobs = []
  console.log('teste')
  const response = onFetch('./data.json')
  response.then(info => {
    info.forEach(array => {
      createJobCard(array, 'main')
    })
  })

  filterDiv.classList.remove('active')
}