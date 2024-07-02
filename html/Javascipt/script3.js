fetch("https://fakestoreapi.com/products")
.then((response)=>res.json())
.then((data)=>{
    data.map((value)=>{
        let card= `<div class="card" style="width: 18rem;">
    <img src="${value.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${value.title}Card title</h5>
      <p class="card-text">${value.description}Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
  document.getElementById
       // console.log(value.title)
       
    })
})
