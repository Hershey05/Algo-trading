import { useState } from "react";
import { notification } from "antd";
import axios from "axios";
import emailjs from "@emailjs/browser";

interface IValues {
  name: string;
  email: string;
  message: string;
  contactNumber: string;
}

const initialValues: IValues = {
  name: "",
  email: "",
  message: "",
  contactNumber: "",
};

const isEmpty = (obj: any) => Object.keys(obj).length === 0;

export const useForm = (validate: { (values: IValues): IValues }) => {
  const [formState, setFormState] = useState<{
    values: IValues;
    errors: IValues;
  }>({
    values: { ...initialValues },
    errors: { ...initialValues },
  });

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = formState.values;
    const errors = validate(values);
    setFormState((prevState) => ({ ...prevState, errors }));

    const serviceId = "service_wawyweo";
    const templateId = "template_xnk83bg";
    const publicKey = "cLgKs3Gjk0D9Je1zs";

    const templateParams = {
      message: JSON.stringify(values),
    };

    try {
      if (isEmpty(errors)) {
        // sending email using EmailJS
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        alert("Subscribed!");
      }
    } catch (error) {
      console.error("Failed to send email. Error: ", error);
      alert("Failed to Subscribe!");
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    const { name, value, id } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [id]: id === "contactNumber" && value !== "" ? Number(value) : value,
      },
      errors: {
        ...prevState.errors,
        [id]: "",
      },
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values: formState.values,
    errors: formState.errors,
  };
};
