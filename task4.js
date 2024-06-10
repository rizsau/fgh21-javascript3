const request = fetch('https://jsonplaceholder.typicode.com/users') // mereturn response object dg method json
request.then(response => {
    response.json().then(data => {
        const names = data.map(people => people.name)
        console.log(names) // data tipe datanya array of object, maka kita bisa gunakan map
    })
})
