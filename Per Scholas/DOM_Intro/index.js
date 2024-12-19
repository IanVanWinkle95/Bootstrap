// Creating the elements and caching the existing element
let body = document.querySelector('body')
let div = document.createElement('div')
let div2 = document.createElement('div')
let ol = document.createElement('ol')
let ul = document.createElement('ul')

// ol 
let li1 = document.createElement('li')
let li2 = document.createElement('li')
let li3 = document.createElement('li')
// ul 
let li4 = document.createElement('li')
let li5 = document.createElement('li')
let li6 = document.createElement('li')

// Appending the created elements to the body
body.appendChild(div).appendChild(ol).appendChild(li1)
ol.appendChild(li2)
ol.appendChild(li3)

body.appendChild(div2).appendChild(ul).appendChild(li4)
ul.appendChild(li5)
ul.appendChild(li6)

// ul.style.border = "2px dashed yellow"
let a = document.createElement('a')
a.setAttribute('href', 'http://www.google.com')
// a.innerHTML = <a href="http://www.google.com">google</a>
a.textContent = "google"
body.prepend(a)
// <a href="http://www.google.com">google</a>