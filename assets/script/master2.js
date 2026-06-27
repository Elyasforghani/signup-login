 const _a = document.getElementById('a')
    const pop = document.querySelector('.pop')
    const editInp = document.querySelectorAll('.pop>input')
    const box = document.querySelector('.box')
    const inp = document.querySelectorAll('.box>input')
    const btn = document.querySelector('.box>button')
    const mytoken = 'https://6a3459d98248ee962fa55807.mockapi.io/project'
    ////user is added we just want to log in

    let emCookie = Cookies.get('Email')
    let passCookie = Cookies.get('password')
    console.log(emCookie);
    console.log(passCookie);
    console.log(Cookies.get());

    /////remembering////////
    if (emCookie != undefined && passCookie != undefined) {
        const person = {
            Email: emCookie,
            password: passCookie,
        }
        compLeted(person)
        console.log("Auto login started");
    }
    /////remembering////////

    btn.addEventListener('click', () => {
        const person = {
            Email: inp[0].value,
            password: inp[1].value
        }
        console.log(person);

        compLeted(person)



    })
    function compLeted(person) {


        const url = new URL(mytoken);

        if (
            person.Email.search(/[a-z]/) == -1 ||
            person.Email.search(/@/)== -1
        ) {
            console.log("person.Email.search(/@/)");
            
            alert("Your email is not valid");
            return;
        }

        url.searchParams.append("Email", person.Email);
        url.searchParams.append("password", person.password);

        fetch(url, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(tasks => {
            if (tasks.length === 0) {
                alert('invalid mail or passs')
                return;
            }
            if (_a.checked) {
                Cookies.set('Email', person.Email, { expires: 7 })
                Cookies.set('password', person.password, { expires: 7 })
            }
            ///diplayin////
            let tbl = document.createElement('table')
          
            tbl.innerHTML = `
    <h2>Welcome ${tasks[0].Fullname}</h2>
    <h2 onclick="logOut()" style="cursor:pinter , color:'black'" >Log out</h2>

    <table>
        <tr>
            <td>ID</td>
            <td>${tasks[0].id}</td>
        </tr>

        <tr>
            <td>Full Name</td>
            <td>${tasks[0].Fullname}</td>
        </tr>

        <tr>
            <td>Age</td>
            <td>${tasks[0].Age}</td>
        </tr>

        <tr>
            <td>Email</td>
            <td>${tasks[0].Email}</td>
        </tr>

        <tr>
            <td>Password</td>
            <td>${tasks[0].password}</td>
        </tr>

        <tr>
            <td>Avatar</td>
            <td>
                <img src="${tasks[0].avatar}">
            </td>
        </tr>

        <tr>
            <td class="edit" onclick="showUserData(${tasks[0].id})">Edit</td>
            <td class="delete" onclick="myDel(${tasks[0].id})">Delete</td>
        </tr>
    </table>
`;
            document.body.appendChild(tbl);
            ///diplayin////

            /////////////////continue to next login page////
            box.style.display = 'none'

        }).catch(error => {
            // handle error
        })



    }

    function logOut() {
        Cookies.remove('Email')
        Cookies.remove('password')
        location.reload()
    }

    function myDel(pd) {
        if (confirm('sure you wanna delete it?')) {
            fetch(mytoken + '/' + pd, {
                method: 'DELETE',
            }).then(res => {
                if (res.ok) {
                    return res.json();
                }
                // handle error
            }).then(task => {
                alert('you have been deleted pls singup again')
                logOut()
            }).catch(error => {
                console.log('just cant');

            })
        }
    }


    async function getData(url) {
        let x = await fetch(url)
        let data = await x.json()
        return data
    }

    async function showUserData(i) {
        pop.style.display = 'block'
        let temp = await getData(mytoken + '/' + i)
        console.log(temp);
        editInp[0].value = temp.Fullname;
        editInp[1].value = temp.Email;
        editInp[2].value = temp.Age;
        editInp[3].value = temp.password;
        editInp[4].value = temp.id
    }

    function userConfirm() {
        const editUserNew = {
            Fullname: editInp[0].value,
            Email: editInp[1].value,
            Age: editInp[2].value,
            password: editInp[3].value,
            id: editInp[4].value
        }


        fetch(mytoken + '/' + editUserNew.id, {
            method: 'PUT', // or PATCH
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(editUserNew)
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(tasks => {
            console.log(tasks);
            alert('user edited!')
            pop.style.display = 'none'
            logOut()


        }).catch(error => {
            // handle error
        })

    }