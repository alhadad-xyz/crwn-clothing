import { useState } from "react";
import FormInput from "../form-input/form-input-component";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";
import {
  createUserDocumentFromAuth,
  signInAuthWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.util";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const handleSumit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthWithEmailAndPassword(email, password);
      console.log(response);
      resetFormFields();
    } catch (error) {}
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in woth your email and password</span>
      <form onSubmit={handleSumit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
          autoComplete="on"
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" onClick={signInWithGoogle} type="submit">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
