//Validation of input values

//toast alert
import { toast } from "react-toastify";

export const validate = (data) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!!data.name === false) {
    errors.name = "Enter your name";
  } else if (!!data.name === true && data.name.length < 4) {
    errors.name = "Your name should be more than 4 characters";
  } else {
    delete errors.name;
  }

  if (!data.password) {
    errors.password = "The password is not valid!";
  } else if (data.password.length < 8) {
    errors.password = "Password must be more than 8 characters";
  } else {
    delete errors.password;
  }

  if (!data.email) {
    errors.email = "Please enter email!";
  } else if (!regex.test(data.email)) {
    errors.email = "The email is not valid";
  } else {
    delete errors.email;
  }

  if (!data.confirmpassword) {
    errors.confirmpassword = "The password is not valid!";
  } else if (data.password !== data.confirmpassword) {
    errors.confirmpassword = "The password is incorrect";
  } else {
    delete errors.confirmpassword;
  }

  return errors;
};

// toast("Wow so easy!")

//toast
export const notify = (boolian, text) => {
  if (boolian === "error") {
    toast.error(text, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  } else if (boolian === "success") {
    toast.success(text, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
};
