// Add your code here
const submitData = (name, email) => {
    let userObj = {
        name: `${name}`,
        email: `${email}`
    }
    let body = document.querySelector(`body`)
    let p = document.createElement(`p`)
    return fetch(`http://localhost:3000/users`, {
        method: `POST`,
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        },
        body: JSON.stringify(userObj)
    })
    .then(resp => resp.json())
    .then(data => {
        p.textContent = data.id
        body.appendChild(p)
    })
    .catch(data => {
        p.textContent = data.message
        body.appendChild(p)
    })

}