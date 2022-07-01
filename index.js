const classSelector = document.getElementById('class-select')
const baseImgUrl = 'https://www.dndbeyond.com/attachments/thumbnails/0/'
const portraitMap = {
  'fighter': '697/400/475/c3fighterintro.png', 
  'wizard': '717/400/484/c3wizardintro.png',
  'barbarian': '679/400/417/c3barbarianintro.png'
}

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

  classSelector.addEventListener('change', (e) => {
    document.getElementById('selected-class').innerText = e.target.value
    let img = document.createElement('img')
    img.id = 'char-img'
    img.src = `${baseImgUrl}${portraitMap[e.target.value.toLowerCase()]}`
    console.log(e.target.value)
    img.setAttribute('width', '400px')
    img.setAttribute('height', '400px')
    document.body.append(img)
  })
}


// the request function will now automatically run when the page loads
request()
