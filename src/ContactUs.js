import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";

function ContactUs() {
  const form = useForm({
    initialValues: {
      fullname: "",
      email: "",
      message: "",
    },

    validate: {
      fullname: (value) =>
        value.length < 2 ? "Full Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      message: (value) =>
        value.length < 10 ? "Full Name must have at least 10 letters" : null,
    },
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />
        <TextInput
          withAsterisk
          label="Message"
          placeholder="Type Here your message !"
          {...form.getInputProps("message")}
        />

        <Checkbox
          mt="md"
          label="I agree to sell my privacy"
          {...form.getInputProps("termsOfService", { type: "checkbox" })}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

export default ContactUs;
