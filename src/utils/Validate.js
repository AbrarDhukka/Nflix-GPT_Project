const Validate = (email, password) => {
  
    const isEmailValid=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
    const isPswdValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid && !isPswdValid) return "Email and Password is not valid";
    if(!isEmailValid) return "Email is not valid";
    if(!isPswdValid) return "Password is not valid";

    return null

}

export default Validate