export const registerUser = (userInfo) => {
    let registeredUsers = JSON.parse(localStorage.getItem('registerdUsers')) || [];

    let index = registeredUsers.findIndex(regUser => regUser.email === userInfo.email);
    if(index == -1) {
        registeredUsers.push(userInfo);
    }
    localStorage.setItem('registerdUsers', JSON.stringify(registeredUsers));    
}

export const login = (userInfo) => {
    if(userInfo) {
        localStorage.setItem('user', userInfo);
    }
}