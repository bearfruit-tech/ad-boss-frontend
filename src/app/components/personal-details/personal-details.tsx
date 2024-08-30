"use client";

import {
  Container,
  Paper,
  TextInput,
  Title,
  Select
} from "@mantine/core";
import { useForm } from "@mantine/form";

const PersonalDetails = () => {
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
              Personal details
            </Title>
            <TextInput
              size="lg"
              mb="md"
              label="First Name"
              placeholder="First Name"
              key={form.key("first-name")}
              {...form.getInputProps("first-name")}
            />
            <TextInput
              size="lg"
              mb="md"
              label="Last Name"
              placeholder="Last Name"
              key={form.key("last-name")}
              {...form.getInputProps("last-name")}
            />
            <Select
                label="Role"
                size="lg"
                placeholder="Role"
                data={['Marketing', 'Sales', 'Account Management', 'Social Media', 'Customer Service']}
            />
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default PersonalDetails;
