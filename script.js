save.addEventListener("click", (e) => {
    if (key.value.length == 0 || dec.value.length == 0) {
        alert("Please enter a key and value")
    }
    else {
        let k = key.value
        let val = dec.value
        todos.innerHTML += `
                <div class="card w-75 mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${k}</h5>
                        <p class="card-text">${val}</p>
                        <a href="#" class="btn btn-primary">remove</a>
                    </div>
                </div>
            `
        localStorage.setItem(k, val)
        key.value = ""
        dec.value = ""
    }
})

clear.addEventListener("click", (e) => {
    localStorage.clear()
    todos.innerHTML = `
        <h4>TODO's :</h4>
        `
})
