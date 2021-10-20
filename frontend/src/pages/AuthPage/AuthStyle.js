import styled from "styled-components";

export const Form = styled.form`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: 5rem;

  a {
      margin-top: 2rem;
      text-decoration: none;
      color: #4B5C77;
      font-size: 2rem;
      border: solid 0.2rem lightgray;

      :hover {
        background: rgb(205, 209, 206);
      }
  }
`;

export const Title = styled.h1`
    text-align: center;
    width: 25%;
    margin-bottom: 2rem;
    border-bottom: solid 0.4rem #4B5C77;
`;

export const Formfield = styled.div`
  position: relative;
  margin: 1.5rem;
  font-size: 5rem;
  overflow-x: visible;

  input {
    appearance: none;
    border: none;
    border-bottom: 0.1rem solid #000;
    outline: none;
    transition: 300ms;

    :focus {
      border-bottom-color:#3498db;
    }
  }
`;

export const Label = styled.label`
    color: #000;
    position: absolute;
    left: 0;
    bottom: 10%;
    transition: 300ms;

    ${({active}) => active && `font-size: 2rem; top: -1rem; color: gray;`};
`;

export const Button = styled.input`
    margin: 3rem;
    padding: 0.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-radius: 1rem;
    border: none;
    background: #4B5C77;
    color: white;

    :hover {
        background: #525255;
    }
`;

export const ErrorMessage = styled.p`
    color: red;
`;
