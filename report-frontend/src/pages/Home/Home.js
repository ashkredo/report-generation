import React, { useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
import { useForm } from "react-hook-form";

const Home = props => {
  const { addToast } = useToasts();

  useEffect(() => {
    document.title = 'Home | Report System';
  }, []);
  
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    props.generateReport(data);
    addToast(`Report generation for ${data.url} enabled with interval ${data.interval}`, {
      appearance: 'success',
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("url")} placeholder="https://example.com" type="url" pattern="https://.*" required />
      <input {...register("interval")} placeholder="Interval" type="number" required />
      <input {...register("email")} placeholder="Email" type="email" required />
      <input type="submit" />       
    </form>
  );
};

export default Home;