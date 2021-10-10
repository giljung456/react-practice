import { FormInput } from "../../molecules";

function IdPasswordForm({ onIdChange, onPasswordChange, idPlaceholder, passwordPlaceholder }) {
  return (
    <form>
      <FormInput
        inputProps={{
          className: "id-input",
          name: "id",
          placeholder: idPlaceholder,
          id: "id",
          onChange: onIdChange,
        }}
        labelProps={{
          className: "id-label",
          inputId: "id",
        }}
        labelName="아이디"
      ></FormInput>
      <FormInput
        inputProps={{
          className: "password-input",
          name: "password",
          placeholder: passwordPlaceholder,
          id: "password",
          onChange: onPasswordChange,
        }}
        labelProps={{
          className: "password-label",
          inputId: "password",
        }}
        labelName="비밀번호"
      ></FormInput>
    </form>
  );
}

export default IdPasswordForm;
