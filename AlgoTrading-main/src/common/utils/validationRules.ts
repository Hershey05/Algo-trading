import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (
    values.contactNumber !== "" &&
    !/^(?:\+91|91|0)?[6-9]\d{9}$/.test(values.contactNumber)
  ) {
    errors.contactNumber = "Contact number is invalid";
  }
  return errors;
}
