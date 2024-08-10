import styled from 'styled-components'

export const InputLabel = styled.label`
  font-size: 12px;
  font-family: 'Roboto';
  color: #475569;
  font-weight: 500;
`
export const UserInput = styled.input`
  font-size: 15px;
  font-family: 'Roboto';
  color: #475569;
  outline: none;
  padding: 8px;
  width: 100%;
  margin-top: 5px;
  border-radius: 4px;
  border: 1px solid #94a3b8;
`
export const CheckBoxContainer = styled.div`
  margin: 12px;
  display: flex;
  align-items: center;
  flex-direction: row;
`
export const CheckBox = styled.input`
  margin-right: 10px;
  width: 15px;
  height: 15px;
`
export const ShowPassword = styled.label`
  color: #1e293b;
  font-size: 15px;
  font-family: 'Roboto';
`
export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 30px;
  width: 350px;
  box-shadow: 0px 5px 10px 0px;
`
export const LogoImg = styled.img`
  margin-bottom: 15px;
  width: 180px;
  align-self: center;
`
export const InputContainer = styled.div`
  width: 100%;
  margin-top: 15px;
`
export const SubmitButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  height: 30px;
  margin-top: 20px;
  width: 100%;
  font-size: 15px;
  font-family: 'Roboto';
`
export const SubmitErrorMsg = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  color: #ff0b37;
`
