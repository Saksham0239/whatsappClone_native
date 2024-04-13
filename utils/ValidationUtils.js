import { validate } from "validate.js";

//for firstName and lastName
export const validateString = (id, value) => {
    const constraints = {
        presence: { allowEmpty: false }
    }

    if (value !== "") {
        constraints.format = {
            pattern: "[a-z]+",
            flags: "i",
            message: "value can only contain letters",
        }
    }

    const validationResult =  validate({ [id]: value }, { [id]: constraints });

    return validationResult && validationResult[id];
}

//for email
export const validateEmail = (id,value) => {
    const constraints = {
        presence:{allowEmpty:false}
    }

    if(value!==""){
        constraints.email=true;
    }

    const validationResult =  validate({ [id]: value }, { [id]: constraints });

    return validationResult && validationResult[id];
}

//for password
export const validatePassword = (id,value) =>{
    const constraints = {
        presence:{allowEmpty:false}
    }

    if(value!==""){
        constraints.length={
            minimum:6,
            message:"must be atleast 6 characters",
        }
    }

    const validationResult =  validate({ [id]: value }, { [id]: constraints });

    return validationResult && validationResult[id];
}