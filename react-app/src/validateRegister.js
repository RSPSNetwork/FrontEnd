export default function validateRegister(values) {
    let errors = {}

    //Username
    if (!values.username.trim()) {
        errors.username = "Username Required"
    }

    //Email
    if(!values.email) {
        errors.email = "Email Required"
    } // else if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)) {
    //     errors.email = "Email address is invalid"
    // }

    //Password
    if(!values.password) {
        errors.password = 'Password is required'
    } else if(values.password.length < 8) {
        errors.password = 'Password needs to be 8 characters or more.'
    }
    if(!values.password2) {
        errors.password2 = 'Password is required'
    } else if(values.password2 !== values.password) {
        errors.password2 = 'Passwords do not match'
    }

    return errors
}