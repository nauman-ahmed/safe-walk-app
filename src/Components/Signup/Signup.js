import { useState } from "react";
import { signupFields } from "../../constants/formFields";
import FormAction from "../FormAction/FormAction";
import FormExtra from "../FormExtra/FormExtra";
import Input from "../Input/Input";
import { registerUser } from "../../API/api";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
import Header from "../../Components/Header/Header.js"
import { ToastContainer, toast } from 'react-toastify';

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup(props) {
  const [signupState, setSignupState] = useState(fieldsState);
  const navigate = useNavigate()

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
    
  };

  //handle Signup API Integration here
  const createAccount = () => {

    console.log("createAccount",signupState)
      registerUser({
        email:signupState.email_address,
        password:signupState.password,
        firstName:signupState.firstName,
        lastName:signupState.lastName
      }).then((res)=>{
        if(res == "Successfully created"){
          toast.success("Successfully created");
          navigate('/');
          console.log("Successfully created")
        }else{
          console.log("ERROR")
          toast.error("ERROR");
          alert("ERROR")

      }
    })
  };

  return (
    <div>
      <ToastContainer />
      <Header
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/login"
      />
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={signupState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
          <FormAction handleSubmit={handleSubmit} text="Signup" />
        </div>
      </form>
    </div>
  );
}
