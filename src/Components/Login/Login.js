import { useEffect, useState } from "react";
import { loginFields } from "../../constants/formFields";
import FormAction from "../FormAction/FormAction";
import FormExtra from "../FormExtra/FormExtra";
import Input from "../Input/Input";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../API/api";
import { setAuthToken } from "../../API/setCommonHeader";
import { decodeToken } from "react-jwt";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);
    const navigate=useNavigate()
  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  const checkAuth = async () => {
    let flag = false;
    localStorage.getItem("authorization") ? flag=true : flag=false

    if(flag){
      navigate('/map');
      setAuthToken(localStorage.getItem("authorization"))
    }

  }

  useEffect(()=>{
      checkAuth()
  },[])

  //Handle Login API Integration here
  const authenticateUser = () => {


    loginUser({
      email:loginState.email_address,
      password:loginState.password,
    }).then((res)=>{
      if(res.message == "Successfully Login"){
        console.log("Successfully Login")
        localStorage.setItem("authorization",res.token!==undefined?res.token:"")
        setAuthToken(res.token)
        navigate('/map');
      }else{
        console.log("ERROR")
        alert("INVALID CREDENTIALS")
      }
    })
  };



  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>

      {/* <FormExtra /> */}
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}
