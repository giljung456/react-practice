import { Input, Label } from "../../atoms";

function FormInput({ inputProps, labelProps, labelName }) {
  return (
    <div className="form-input">
      <Label {...labelProps}>{labelName}</Label>
      <Input {...inputProps}></Input>
    </div>
  );
}

export default FormInput;
