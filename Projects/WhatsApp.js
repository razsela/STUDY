async function fetch_data_async() {
    const messages = document.getElementById('messages')
    console.log(messagesList);
    messagesList.innerHTML = ""

    const url = 'http://localhost:3000/users'

    const response = await fetch(url)
    if (!response.ok) {
        alert('failure') // 1 -- failure
        return
    }
    const data = await response.json() // 2 -- success
    console.log(data);
    data.forEach(message => {
        const row = document.createElement('tr')
        row.innerHTML = `
                             <td>${message.name}</td>
                             <td>${message.body}</td>`
        console.log(row);
        messagesList.appendChild(row)
    });
}
async function post_data_async() {
    const messages = document.getElementById('messages')
    console.log(messages);

    const text = document.getElementById('text').value;
    const name = document.getElementById('name').value;


    const url = 'http://localhost:3000/users'

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: `{
                    "username" : "${name}",
                    "text": "${text}"
                }`
    })
    if (!response.ok) {
        alert('failure') // 1 -- failure
    } else {

        const response_get = await fetch(url)
        if (!response_get.ok) {
            alert('failure') // 1 -- failure
            return
        }
        const data = await response_get.json() // 2 -- success
        console.log(data);
        data.forEach(todo => {
            const row = document.createElement('tr')
            row.innerHTML = `
                             <td>${message.name}</td>
                             <td>${message.text}</td>
                             `
            messages.appendChild(row)
        });

    }
}
