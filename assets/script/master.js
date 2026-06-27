
const inp = document.querySelectorAll('.box>input')

const myUrl = 'https://6a3459d98248ee962fa55807.mockapi.io/project'


function moVeTo(){
    window.location="index2login.html";
}

function addUser() {
    if (inp.value =='') {
        alert("Please fill in all fields.");
        return;
    }


    const person = {
        Fullname: inp[0].value.trim(),
        Email: inp[1].value.trim(),
        Age: inp[2].value.trim(),
        password: inp[3].value.trim()
    }
    console.log(person);

    const url = new URL(myUrl)
    fetch(url, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        // Send your data in the request body as JSON
        body: JSON.stringify(person)
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        throw new Error('we got problem')
    }).then(data => {
        alert('user added')
        console.log(data);

    }).catch(error => {
        console.error('error');

    })
}
//////////////

// function showuser() {
//     fetch(url, {
//         method: 'GET',
//         headers: { 'content-type': 'application/json' },
//     }).then(res => {
//         if (res.ok) {
//             return res.json();
//         }
//         // handle error
//     }).then(tasks => {
//         // box.style.display='none'
//         // tasks.map((val)=>{
//         //       let _ul=document.createElement('ul')
//         //     let _li=document.createElement('li')
//         //     _main.appendChild(_ul).appendChild(_li)
//         //     _li.innerHTML= `
//         //         <b>${val.Age}</b>
//         //     `
//         // })
//         alert('user is added')


//     }).catch(error => {
//         // handle error
//     })
// }