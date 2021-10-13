import React from "react";
import ReactDOM from "react-dom";
import { Form, useFormik } from "formik";
import {
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  Button,
  Container,
  Stack,
  Text
} from "@chakra-ui/react";

const SignupForm = () => {
  const validate = (values) => {
    let errors = {};
    if (!values.email) {
      errors.email = "Email address is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: { email: "" },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <Container minH="100vh">
      <form onSubmit={formik.handleSubmit}>
        <Stack direction="column" spacing={20}>
          <FormControl>
            <FormLabel>Email Address</FormLabel>
            <Input
              placeholder="Email Address"
              py={20}
              px={10}
              type="text"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </FormControl>
          {formik.errors.email ? (
            <Text fontSize="sm" color="tomato">
              {formik.errors.email}
            </Text>
          ) : null}
          <Button
            type="submit"
            bg="teal"
            py={20}
            px={30}
            color="white"
            fontWeight="bold"
          >
            Submit
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

function App() {
  return <SignupForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  rootElement
);
