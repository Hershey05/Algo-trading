import { withTranslation } from "react-i18next";
import { Container, StyledInput } from "./styles";
import { Label } from "../TextArea/styles";
import { InputProps } from "../types";

const Input = ({
  id,
  name,
  placeholder,
  required,
  onChange,
  t,
}: InputProps) => (
  <Container>
    <Label htmlFor={name} style={{ fontSize: "20px" }}>
      {t(name)}
    </Label>
    {required !== null && required && (
      <span style={{ color: "red", fontSize: "20px" }}>*</span>
    )}
    <StyledInput
      placeholder={t(placeholder)}
      name={name}
      id={id}
      onChange={onChange}
    />
  </Container>
);

export default withTranslation()(Input);
