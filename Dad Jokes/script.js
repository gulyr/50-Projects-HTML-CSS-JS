const joke = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)
generateJoke()

// async/await
async function generateJoke() {
    const config = {
        headers: { Accept: 'application/json' },
    }
    const response = await (
        await fetch('https://icanhazdadjoke.com/', config)
    ).json()
    joke.innerHTML = response.joke
}

// then()
// function generateJoke() {
//     const config = {
//         headers: { Accept: 'application/json' },
//     }
//     fetch('https://icanhazdadjoke.com/', config).then((response) =>
//         response.json().then((data) => {
//             joke.innerHTML = data.joke
//         })
//     )
// }