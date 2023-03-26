/*
const productList = [
    {
      name: "Product 1",
      price: 10.99,
      url: "https://www.example.com/product1"
    },
    {
      name: "Product 2",
      price: 19.99,
      url: "https://www.example.com/product2"
    },
    {
      name: "Product 3",
      price: 7.99,
      url: "https://www.example.com/product3"
    },
    {
      name: "Product 4",
      price: 11.99,
      url: "https://www.example.com/product3"
    },
    {
      name: "Product 5",
      price: 12.99,
      url: "https://www.example.com/product3"
    }
  ];
  
  const searchInput = document.getElementById("search");
  const productListElement = document.getElementById("product-list");
  
  function renderProductList(products) {
    productListElement.innerHTML = "";
    
    products.forEach((product) => {
      const productElement = document.createElement("li");
      productElement.innerHTML = `
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <a href="${product.url}" target="_blank">Buy Now</a>
      `;
      productListElement.appendChild(productElement);
    });
  }
  
  function filterProducts(searchTerm) {
    const filteredProducts = productList.filter((product) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    renderProductList(filteredProducts);
  }
  
  searchInput.addEventListener("keyup", () => {
    filterProducts(searchInput.value);
    productListElement.removeAttribute("hidden");
  });
  
  renderProductList(productList).toggle;*/
  document.querySelector('button').addEventListener('click', getFetch)
  function getFetch(){
  const searchInput = document.getElementById("search").value;
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '37c2f13ef6msh05aaef1aa601b12p1d9b7fjsn9dcf3dd6ee8a',
		'X-RapidAPI-Host': 'pricer.p.rapidapi.com'
	}
};

fetch(`https://pricer.p.rapidapi.com/str?q=${searchInput}`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
  }
