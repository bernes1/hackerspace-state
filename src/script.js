fetch("https://door.hackeriet.no/door.json")
    .then(res => console.log(res.json()))
    .then(data => console.log(data))