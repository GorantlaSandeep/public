import styled from "styled-components";
import { Box } from "@mui/material";

export const MainConatiner = styled.div`
  text-align: center;
`;
export const LogoContainer = styled(Box)`
  background-color: #292075;

  & .Image {
    height: 150px;
    padding: 20px;
  }

  & p {
    color: WHITE;
    font-size: 30px;
    font-family: inherit;
    letter-spacing: 5px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;
export const FormConatainer = styled(Box)`
  box-shadow: 0 4px 8px 0 rgb(37 36 59 / 5%);
  height: 382px;
  border-radius: 8px;
  background-color: #ffffff;
  max-width: 98%;
  margin: 0 auto;
  background: #f0f2f5;

  & input {
    padding: 4px 33px 0px 0px;
    height: 29px;
    width: 267px;
    background-color: #ffffff;
    border: 1px solid black;
    border-radius: 2px;
  }

  & p {
    color: #292075;
  }

  & button {
    padding: 8px;
    color: white;
    background-color: #292075;
    border-radius: 5px;
    width: 200px;
    border: #292075;
  }
`;
