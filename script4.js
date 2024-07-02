fetch("https://fakestoreapi.com/products")
.then((res) => res.json())
.then((data) => {
    data.map ((value)=>{
      let card = `<div class="card" style="width: 18rem;" >
      <img src="${value.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${value.title}</h5>
        <p class="card-text">${value.description}.</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>`
      document.getElementById("maindiv").innerHTML +=card
    })
})

