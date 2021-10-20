import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  * {
    color: black;
    padding: 2rem;
  }
`;

const Message = styled.h1`
  font-size: 5rem;
`;

const Styledlink = styled(Link)`
  font-size: 2.5rem;
`;

const NotFound = () => (
  <Wrapper>
    <Message>404 - Not Found!</Message>
    <Styledlink to="/">Go Home</Styledlink>
  </Wrapper>
);

export default NotFound;
