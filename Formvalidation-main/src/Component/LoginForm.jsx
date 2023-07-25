/**
 * Form Valadation with Username, Email,Password
 * Author: Vijay
 *
 */
import React, { useState, useEffect } from "react";
import "./LoginForm.css.js";
import { LogoContainer, MainConatiner ,FormConatainer} from "./LoginForm.css.js";
import sbilogo from "./../assests/sbi.svg"
import { Grid } from "@mui/material";

function LoginForm() {
  const intialvalues = { username: "", email: "", password: "" };
  const [formvalues, Setformvalues] = useState(intialvalues);
  const [formerrors, SetFormerrors] = useState(intialvalues);
  const [issubmit, Setissubmit] = useState(false);

  const handler = (e) => {
    const { name, value } = e.target;
    Setformvalues({ ...formvalues, [name]: value });
  };

  const handlersubmit = (e) => {
    e.preventDefault();
    SetFormerrors(validate(formvalues));

    Setissubmit(true);
  };

  useEffect(() => {
    console.log(formerrors);
    if (Object.keys(formerrors).length === 0 && issubmit) {
      console.log(formvalues);
    }
  }, [formerrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /\S+@\S+\.\S+/;
    if (!values.username) {
      errors.username = "USERNAME IS REQUIRED * ";
    } else if (values.username.length <= 6) {
      errors.username = "PLEASE ENTER VALID USERNAME";
    }
    if (!values.email) {
      errors.email = "EMAIL IS REQUIRED";
    } else if (!regex.test(values.email)) {
      errors.email = "ENTER VALID EMAIL ";
    }
    if (!values.password) {
      errors.password = "ENTER VALID PASSWORD";
    } else if (values.password.length <= 4) {
      errors.password = "PASSWORD IS MORE THAN 4 DIGITS";
    }
    return errors;
  };

  return (
    <MainConatiner>
      <LogoContainer>
        <Grid container>
          <Grid xs={12}>
            <img src={sbilogo} alt="Sbi-logo" className="Image" />
            <p>State Bank of India</p>
          </Grid>
        </Grid>
      </LogoContainer>
    
     <p style={{"font-size": "20px","color": "#292075"}}>Login in to SBI</p>
     <FormConatainer>
      <form onSubmit={handlersubmit} style={{"padding":"29px 0px 0px 0px"}}>
        <input
          name="username"
          placeholder="USERNAME"
          value={formvalues.username}
          onChange={handler}
        />
        <p>{formerrors.username}</p>
        <br />
        <input
          name="email"
          placeholder="EMAIL"
          value={formvalues.email}
          onChange={handler}
        />
        <p>{formerrors.email}</p>
        <br />
        <input
          name="password"
          placeholder="PASSWORD"
          value={formvalues.password}
          onChange={handler}
          maxLength={10}
        />
        <p>{formerrors.password}</p>
        <br />
        <button>submit</button>
      </form>
      </FormConatainer> 
      <p>@copy right by State bank of india 2022</p>
    </MainConatiner>
  );
}

export default LoginForm;
