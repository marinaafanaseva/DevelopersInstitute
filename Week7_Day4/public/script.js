const getAll = document.getElementById('getAll')
getAll.addEventListener(`click`, getAllF)
const post = document.getElementById('post')
post.addEventListener(`click`, postItem)


function getAllF(){
  console.log('w')
  axios.get(`http://localhost:3000/items/`)     //instead of fetch-method
  //.then(res => res.json())                //for fetch
  .then(data => {
    console.log(data)
    console.log(data[0].name)
    const div = document.getElementById('div')
    for (let i = 0; i < data.length; i++) {
      const item = document.createElement('h1')
      item.textContent = `${data[i].name} price: ${data[i].price}$`
      div.appendChild(item)
    } 
  })
  .catch(e => {
    console.log(e);
  })
}


function postItem(){
  const nameV = document.getElementById('name').value
  const priceV = document.getElementById('price').value
  const obj = {
    name: nameV,
    price: priceV
  }
  console.log('w')
  axios.post(`http://localhost:3000/items/${nameV}/${priceV}`, {     //instead of fetch-method
  //method: 'POST', // or 'PUT' //for fetch
  headers: {
    'Content-Type': 'application/json',
  },
  //body: JSON.stringify(obj)     //for fetch
  body: "Body of post",  })
  //.then(res => res.json())        //for fetch
  .then(data => {
    console.log(data)
    console.log(data[0].name)
    const div = document.getElementById('div')
    for (let i = 0; i < data.length; i++) {
      const item = document.createElement('h1')
      item.textContent = `add ${data[i].name} price: ${data[i].price}$`
      div.appendChild(item)
    }
  })
  .catch(e => {
    console.log(e);
  })
}