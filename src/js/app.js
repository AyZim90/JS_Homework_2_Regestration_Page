function register() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user ={
        name: name,
        surname: surname,
        username: username,
        password: password
    };

    localStorage.setItem(username, JSON.stringify(user));
    alert('Registration successful!');}

function login() {
    const  loginUsername =document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const storedUser = localStorage.getItem(loginUsername);

    if (storedUser) {
        const user = JSON.parse(storedUser);

    if (user.password=== loginPassword) {
            alert('Login successful! Welcome, '   + user.name + '  ' + user.surname + '!');
        } else {
            alert('Invalid username or password. Please try again.');
        }
    } else {
    alert('Invalid username or password. Please try again.');
    }}