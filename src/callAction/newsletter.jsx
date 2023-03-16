// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { BsChevronCompactRight } from "react-icons/bs";
import './index.css';


function ContactForm() {
  const [state, handleSubmit] = useForm("mwkjqjna");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <input
        placeholder='  Ingresa tu email'
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <button className='submit' type="submit" disabled={state.submitting}>
      <a><BsChevronCompactRight/></a>
      </button>
    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;
