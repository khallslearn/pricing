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
    //.then(response => console.log(response[0]))
	/*.then(response => 
        document.querySelector("h2").innerHTML=`Title:${response[0].title} Price: ${response[0].price}`,
        document.querySelector("h3").innerHTML=`Title:${response[0].title} Price: ${response[0].price}` 
        )*/
        .then(data => {
            console.log(data)
            let list =  document.getElementById("title")
            data.slice(-5).forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item.title; // Replace with the property you want to display in the list
                list.appendChild(listItem);
              });
              document.body.appendChild(list);
           
           
            /*document.getElementById("title").innerHTML=`Title:${data[0].title}`
            document.getElementById("price").innerHTML=`Price: ${data[0].price} `
         var imageUrl = data[0].img
         document.getElementById('image1').setAttribute('src', imageUrl);

         var linkUrl = data[0].link
         	// Create a new a element and set its href attribute to the link URL
				const linkElement = document.createElement('a');
				linkElement.setAttribute('href', linkUrl);
				linkElement.textContent = 'Click here to go to the link';
				
				// Add the link element to the HTML page
				document.getElementById('link').appendChild(linkElement);
          // document.getElementById("link").innerHTML =`Website: ${data[0].link}`
            document.getElementById("title2").innerHTML=`Title:${data[1].title}`
            document.getElementById("price2").innerHTML=`Price: ${data[1].price} `
            var imageUrl1 = data[1].img
            document.getElementById('image2').setAttribute('src', imageUrl1);         
              // document.getElementById("link2").innerHTML =`Website: ${data[1].link}`
            // document.querySelector("h3").innerText=`Title:${data[1].title} Price: ${data[1].price} Website: ${data[1].shop}` 
        var linkUrl1 = data[1].link
     const linkElement1 = document.createElement('a');
       linkElement1.setAttribute('href', linkUrl1);
       linkElement1.textContent = 'Click here to go to the link';
       document.getElementById('link2').appendChild(linkElement1);
*/
    })
	.catch(err => console.error(err));
  }


//mapping 