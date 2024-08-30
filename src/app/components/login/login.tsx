"use client";

import {
  Button,
  Container,
  Paper,
  PasswordInput,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";

const LoginComponent = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },
  });

  const login = (values: any) => {
    alert(values);
    console.log(values);
  };

  return (
    <div>
      <Container size="xs" mt="xl">
        <Paper shadow="sm" radius="md" withBorder p="xl">
          <Title mb="xl" ta="center">
            Login here
          </Title>
          <form onSubmit={form.onSubmit((values: any) => login(values))}>
            <TextInput
              mb="md"
              label="Email"
              placeholder="one@gmail.com"
              key={form.key("email")}
              {...form.getInputProps("email")}
            />
            <PasswordInput
              mb="md"
              label="Password"
              key={form.key("password")}
              {...form.getInputProps("password")}
            />
            <Button size="compact-lg" fullWidth type="submit">
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default LoginComponent;
