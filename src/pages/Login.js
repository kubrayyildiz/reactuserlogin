import {
  
  StyledFormArea,
  StyledFormButton,
 
  Avatar,
  StyledTitle,
  colors,
  ButtonGroup,
  ExtraText,
  TextLink,
  CopyrightText,
} from "./../components/Styles";
import Logo from "./../assets/user.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  Formik } from "formik";
import { TextInput } from "../components/FormLib";
import * as Yup from "yup";
import { FiMail, FiLock } from "react-icons/fi";


const Login = () => {
  const navigate = useNavigate();
  const [user, setUSer] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    if (e.target.type === "text") {
      setUSer({ ...user, email: e.target.value });
      console.log(user);
    } else if (e.target.type === "password") {
      setUSer({ ...user, password: e.target.value });
      console.log(user);
    }
  };
  const handleClick=()=>{
    if(user.email==="epikrobotik@gmail.com"&&user.password==="12345"){
      navigate("/dashboard");
    }
    else {
      alert("Wrong Username or Password ")
    }
  }
  return (
    <div>
      <StyledFormArea>
        <Avatar image={Logo} />
        <StyledTitle color={colors.theme} size={30}>
          LOGIN PAGE
        </StyledTitle>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password:
              Yup.string()
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
          }}
        >
          {({ isSubmitting }) => (
            <form>
              <TextInput
                name="email"
                type="text"
                label="Email Address"
                value={user.email}
                onChange={handleChange}
                icon={<FiMail />}
              />
              <TextInput
                name="password"
                type="password"
                label="Password"
                value={user.password}
                onChange={handleChange}
                icon={<FiLock />}
              />
              <ButtonGroup  >
                <StyledFormButton onClick={handleClick} type="submit" >LOGIN</StyledFormButton>
              </ButtonGroup>
            </form>
          )}
        </Formik>
        <ExtraText>
          Forgotten Password?{" "}
          <TextLink to="/forgottenpassword">Reset it</TextLink>
        </ExtraText>
      </StyledFormArea>
      <CopyrightText>Epik Robotik &copy;2020</CopyrightText>
    </div>
  );
};
export default Login;
