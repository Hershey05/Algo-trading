import { withTranslation } from "react-i18next";
import { StyledTextArea, StyledContainer, Label } from "./styles";
import { InputProps } from "../types";

const TextArea = ({ id, name, placeholder, onChange, t }: InputProps) => (
  <StyledContainer>
    <Label htmlFor={name} style={{ fontSize: "20px" }}>
      {t(name)}
    </Label>
    <StyledTextArea
      placeholder={t(placeholder)}
      id={id}
      name={name}
      onChange={onChange}
    />
  </StyledContainer>
);

export default withTranslation()(TextArea);
