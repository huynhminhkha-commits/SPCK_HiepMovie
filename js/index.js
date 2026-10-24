const url = "https://6a115e8e3e35d0f37ee33178.mockapi.io/product"

fetch(url)
    // Chuyển từ json qua object
    .then(res => res.json())
    .then(data => {
        const TrendingMovie = data.splice(0,7)
        const trengdingList = document.querySelector('.movies');
        TrendingMovie.forEach(product => {
            const productCard = `
                    <a href="#" onclick="getProductById(${product.id})">
                        <div
                        class="movie"
                        style="
                            background-image: url(./image/${product.image});
                        "
                        ></div>
                    </a>
            `;
            trengdingList.innerHTML += productCard;
        });

        const RecommendedMovie = data.splice(0,7);
        const RecommendList = document.querySelector('.Recommended');
        RecommendedMovie.forEach(product => {
            const productCard = `
                    <a href="#" onclick="getProductById(${product.id})">
                        <div
                        class="movie"
                        style="
                            background-image: url(./image/${product.image});
                        "
                        ></div>
                    </a>
            `;
            RecommendList.innerHTML += productCard;
        });

    })
    .catch(error => console.error('Error fetching data:', error));

function getProductById(id) {
    fetch(`${url}/${id}`)
        .then(res => res.json())
        .then(product => {
            localStorage.setItem("choosedProduct", JSON.stringify(product));
            location.href = "detail.html"
        })
        .catch(error => console.error(error));
    }