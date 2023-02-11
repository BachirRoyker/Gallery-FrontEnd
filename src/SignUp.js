import {
  Box,
  Checkbox,
  Group,
  MultiSelect,
  PasswordInput,
  Radio,
  TextInput,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import React from "react";
import { Button } from "react-bootstrap";
function SignUp() {
  const form = useForm({
    initialValues: {
      fname: "",
      lname: "",
      date: "",
      email: "",
      password: "",
      activity: "",
      typeUser: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      fname: (value) =>
        value.length < 2 ? "First Name must have at least 2 letters" : null,
      lname: (value) =>
        value.length < 2 ? "Last Name must have at least 2 letters" : null,
    },
  });

  return (
    <Box sx={{ maxWidth: 600 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          label="First Name"
          placeholder="First Name"
          withAsterisk
          {...form.getInputProps("fname")}
        />
        <TextInput
          label="Last Name"
          placeholder="Last Name"
          withAsterisk
          {...form.getInputProps("lname")}
        />
        <DatePicker
          placeholder="Pick date"
          label="Date of Birth"
          withAsterisk
          {...form.getInputProps("date")}
        />
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          withAsterisk
          label="Password"
          placeholder="*****"
          {...form.getInputProps("password")}
        />
        <MultiSelect
          searchable
          clearable
          label="Vos domaines "
          placeholder="Choisissez dans la liste"
          data={[
            { value: "painting", label: "painting" },
            { value: "sculpture", label: "sculpture" },
            { value: "modern", label: "modern" },
          ]}
        />
        <Radio.Group
          name="typeUser"
          label="Select your user type"
          description="This option is for what windows will the user see"
          withAsterisk
          {...form.getInputProps("typeUser", { type: "radio" })}
        >
          <Radio value="visitor" label="Visitor" />
          <Radio value="creator" label="Createur" />
        </Radio.Group>
        <Checkbox
          mt="md"
          label="I agree to sell my privacy"
          {...form.getInputProps("termsOfService", { type: "checkbox" })}
        />

        <Group position="center" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
export default SignUp;
