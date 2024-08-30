"use client";

import {
  Container,
  Paper,
  TextInput,
  Title,
  Select,
  Textarea
} from "@mantine/core";
import { useForm } from "@mantine/form";

const CompanyDetails = () => {
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
      <Container size="lg" mt="xl" w={600}>
        <Paper shadow="sm" radius="md" withBorder p="xl">
          <form onSubmit={form.onSubmit((values: any) => login(values))}>
            <Title mb="xl" ta="center" order={3}>
              Company details
            </Title>
            <TextInput
              size="lg"
              mb="md"
              label="Company Name"
              placeholder="Company ABC (Pty) Ltd"
              key={form.key("company-name")}
              {...form.getInputProps("company-name")}
            />
            <Select
                label="Industry"
                size="lg"
                placeholder="Role"
                data={['Finance', 'Technology', 'Healthcare', 'Retail', 'Manufacturing']}
            />
            <Textarea
                label="Description"
                description="Tell us more about your business"
                placeholder="Tell us more about your business, what you do, your mission, vision and values."
            />
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default CompanyDetails;
