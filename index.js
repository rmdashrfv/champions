const classSelector = document.getElementById('class-select')

let request = async () => {
  // initiate request to dnd server
  let req = await fetch('https://www.dnd5eapi.co/api/classes')
  // get response from server and convert it to JSON
  let res = await req.json()
  res.results.forEach((char) => {
    let option = document.createElement('option')
    option.setAttribute('value', char.name)
    option.innerText = char.name
    classSelector.append(option)
  })
}


// the request function will now automatically run when the page loads
request()
