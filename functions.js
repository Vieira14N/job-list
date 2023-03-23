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

    if(obj.tools){
        obj.tools.forEach(tool => {
            list.innerHTML += `<li>${tool}</li>`
        })
    }
    
    jobContainer.appendChild(list)
    mainContainer.appendChild(jobContainer)
}