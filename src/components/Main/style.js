import styled from "styled-components"

export const MainBG = styled.main`
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  min-height: 500px;
  flex-wrap: wrap;
  .information {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    flex-wrap: wrap;

    .container-information {
      max-width: 600px;
      h1 {
        max-width: 400px;
        color: hsl(246, 25%, 77%);
        font-size: 38px;
        @media (max-width: 320px) {
            font-size: 25px;
        }
      }
      p {
        margin: 1rem 0px 0px 0px;
        max-width: 500px;
        color: hsl(246, 25%, 77%);
        font-size: 14px;
      }
    }
  }
`
export const DivBlock = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .button-try {
        min-width: 100%;
        min-height: 4.5rem;
        @media (max-width: 320px){
            display: flex;
            justify-content: center;
            align-items: center;
            padding-left: 3.5rem;
        }
    button {
      min-width: 100%;
      min-height: 55px;
      border: none;
      background: hsl(248, 32%, 49%);
      color: white;
      font-size: 14px;
      box-shadow: 0px 6px hsl(249, 10%, 26%);
      border-radius: 0.5rem;
      cursor: pointer;
      @media (max-width: 320px){
         min-width: 350px;
         min-height: 50px;
      }
    }
  }
  form {
    margin-top: 2.5rem;
    border-radius: 0.5rem;
    background: white;
    box-shadow: 0px 7px hsl(249, 10%, 26%);
    background: white;
    min-width: 460px;
    display: flex;
    justify-content: center;
    align-items: center;

    .container-form {
      display: flex;
      flex-direction: column;
      max-width: 400px;
      max-height: 100%;
      @media (max-width: 320px){
          max-width: 300px;
      }
      input {
        border: none;
        max-width: 100%;
        min-height: 3rem;
        margin-top: 1rem;
        outline: none;
        border: 1px solid hsl(246, 25%, 77%);
        padding: 1rem;
        border-radius: 0.3rem;
        @media (max-width: 320px){
            min-width: 350px;
      }
        &:focus {
          border: 2px solid hsl(246, 25%, 77%);
        }
        &::placeholder {
          font-weight: 700;
          opacity: 0.8;
        }
      }
      button {
        margin-top: 1rem;
        background: hsl(154, 59%, 51%);
        border: none;
        color: white;
        text-transform: uppercase;
        font-weight: 700;
        max-width: 100%;
        min-height: 3rem;
        cursor: pointer;
        @media (max-width: 320px){
            min-width: 350px;
      }
        box-shadow: 0px 6px #006400;
        border-radius: 0.4rem;
      }
    }
  }
`
export const FooterForm = styled.footer`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 12.7px;
    max-width: 100%;
    font-weight: 500;
    opacity: 0.5;
    @media (max-width: 320px){
            min-width: 100%;
            font-size: 11px;
    }
    strong {
      color: hsl(0, 100%, 74%);
    }
  }
`
