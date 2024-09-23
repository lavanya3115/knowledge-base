import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { useState } from 'react';
import DefaultLayout from "@/layouts/default"; // Assuming you're using DefaultLayout
import { title, subtitle } from "@/components/primitives";
import { button as buttonStyles } from "@nextui-org/theme";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    // To be implemented: call backend API for registration
    console.log('Registering user:', formData);
  };

  return (
  <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Admin&nbsp;</h1>
          <h1 className={title()}>Register</h1>
          <h4 className={subtitle({ class: "mt-4" })}>
            Create an account to manage educational resources.
          </h4>
        </div>

        <div className="flex flex-col gap-3 items-center w-full max-w-lg">
          <Input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            label="Username"
            placeholder="Enter your username"
            fullWidth
          />

          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            label="Email"
            placeholder="Enter your email"
            fullWidth
          />

          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            label="Password"
            placeholder="Enter your password"
            fullWidth
          />

          <Button
            className={buttonStyles({
              color: 'primary',
              radius: 'full',
              variant: 'shadow',
              class: 'w-full mt-4',
            })}
            onClick={handleRegister}
          >
            Register
          </Button>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default RegisterPage;