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

const Login = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },
  });

  const login = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      <Container size="xs" mt="xl">
        <Paper shadow="sm" radius="md" withBorder p="xl">
          <Title mb="xl" ta="center" order={2}>
            Login
          </Title>
          <form onSubmit={form.onSubmit((values: any) => login(values))}>
            <TextInput
              size="lg"
              mb="md"
              label="Email"
              placeholder="email@domain.com"
              key={form.key("email")}
              {...form.getInputProps("email")}
            />
            <PasswordInput
              size="lg"
              mb="md"
              placeholder="Your password"
              label="Password"
              key={form.key("password")}
              {...form.getInputProps("password")}
            />
            <Button size="lg" fullWidth type="submit">
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
