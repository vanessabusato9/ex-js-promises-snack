//SNACK 1
function getPostTitle(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(post => resolve(post.title))
            .catch(reject)

    });
}

getPostTitle(1)
    .then(title => console.log("Titolo:", title))
    .catch(error => console.error(error));


//SNACK 2
function lanciaDado() {
    return new Promise((resolve, reject) => {
        console.log("Sto lanciando il dado..");
        setTimeout(() => {
            const incastrato = Math.random() < 0.2;
            if (incastrato) {
                reject("Il dato si è incastrato")
            } else {
                const risultato = Math.floor(Math.random() * 6) + 1;
                resolve(risultato);
            }
        }, 3000);
    });
}

lanciaDado()
    .then(risultato => console.log("Il numero è:", risultato))
    .catch(error => console.error(error));