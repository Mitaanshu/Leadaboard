import styled, { createGlobalStyle, css, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
      -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 1vmin);

  h2 {
    margin: 0 0.5em 0 0;
  }

  form {
    color: #000;
    width: 100%;
    max-width: 460px;
    padding: 2em 1.5em;
    border-radius: 10px;
    box-shadow: 10px 10px 35px -8px rgba(0, 0, 0, 0.15);
    background-color: rgba(246, 247, 250, 1);
  }
  .margin-y {
    margin: 0.7em 0;
`;

export const InputContainer = styled.div`
  margin: 0.4em 0;
  p {
    font-size: 0.8em;
    color: #555;
    margin: 0 0.2em 0 0;
  }
`;

export const ConatctInfoContainer = styled.div`
  .contact-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  button {
    border: 1px solid rgba(0, 0, 0, 0.1);
    font-weight: 600;
    font-size: 1.1em;
    background: none;
    border-radius: 5px;
  }
  .mr {
    margin-right: 0.7em;
  }
`;

const defaultInputStyles = css`
  outline: none;
  box-sizing: border-box;
  width: 100%;
  font-family: sans-serif;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 1em 0.6em;
`;

export const StyledInput = styled.input`
  ${defaultInputStyles}
`;

export const StyledSelect = styled.select`
  ${defaultInputStyles}
  option {
    border: 1px solid red;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 1em 0;
  background: none;
  border-radius: 5px;
  margin: 0.8em 0;
  border: 1px solid rgba(0, 0, 0, 0.7);
  color: rgba(0, 0, 0, 0.7);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
    color: #fafafa;
    border-color: transparent;
  }
`;

export const ErrorBox = styled.div`
  width: 100%;
  padding: 0.8em 0;
  text-align: center;
  background-color: #ffcdd2;
`;
