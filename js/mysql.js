let button = document.querySelector('.button22')

button.onclick = function() {
    
    
    
    // window.open('')
    let name = document.querySelector('.fload')
    let surname = document.querySelector('.fload2')
    let rud = document.querySelector('.fload3')
    let variant2 = `${name} ${surname} `
    console.log(variant2)
    console.log(query)
    console.log(form)


};


function request(user, password, query) {

    let form = new FormData();
    form.append('user', user);
    form.append('password', password);
    form.append('database', 'i22s0909');
    form.append('query', query);

    return fetch('https://mysql.students.it-college.ru/sqlpass.php', {
        method: 'POST',
        body: form
    })
}

function query(query) {
    return request('i22s0909', '5x9PVV83', query);
}


// let name = 'Oleg'
// let surname = 'Dremov'



// let variant2 = `${name} ${surname} `
// console.log(variant2)

query(`INSERT INTO user (login, name, pass) VALUES ('viklover', 'Mihail', '123')`)
    .then(res => res.json())
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        
    })

console.log(true)