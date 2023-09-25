const stateEL = document.getElementById('state')
async function get_state() {
    let res = await fetch("http://127.0.0.1:8000/hackeriet/state", { method: 'GET', mode: 'cors',headers: { 'Content-Type': 'application/json' } });
    let data = await res.json();
    const states ={
        open: "OPEN", 
        closed: "CLOSED", 
    }
    if (data == "closed") {
        sate = states.closed;
        stateEL.innerText = "STATE: " + sate;
    } 
    else if (data == "open") {
        sate = states.open
        stateEL.innerText = "STATE: " + sate;
    }
    console.log(data);
}

get_state()
