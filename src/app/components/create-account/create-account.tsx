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

const CreateAccount = () => {
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
      <Container size="lg" mt="xl" w={400}>
        <Paper shadow="sm" radius="md" withBorder p="xl">
          <form onSubmit={form.onSubmit((values: any) => login(values))}>
            <Title mb="xl" ta="center" order={3}>
              Account details
            </Title>
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
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default CreateAccount;
