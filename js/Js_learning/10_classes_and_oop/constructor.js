class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }
    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }
    get password() {
        return `${this._password}tupi`
    }
    set password(value) {
        this._password = value
    }
}


const tupi = new User("t@trupti.ai", "123")
console.log(tupi.email);
console.log(tupi.password);