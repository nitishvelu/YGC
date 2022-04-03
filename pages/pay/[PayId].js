import React from "react";
import { useRouter } from "next/router";
import {
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Box,
  Button,
  Center,
  InputLeftAddon,
  InputGroup,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

export const PaySchema = Yup.object().shape({
  amount: Yup.number().required("* Required"),
});

export default function Pay() {
  const router = useRouter();
  const { PayId } = router.query;

  const formik = useFormik({
    initialValues: { amount: "" },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const data = await fetch(`/api/pay/${PayId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then((res) => res.json());

      setSubmitting(false);

      if (data?.id) {
        resetForm();
        router.push("/");
      }
    },
    validationSchema: PaySchema,
    validateOnBlur: true,
  });

  return (
    <Flex flexDir="column" w="100vw" alignItems={"center"}>
      <Box
        mx="25 "
        my="2"
        px="10"
        py="10"
        w={["90vw", "100vw", "40vw"]}
        rounded="lg"
        shadow={"lg"}
        justifyContent={"center"}
        bg="gray.50"
      >
        <form onSubmit={formik.handleSubmit}>
          <FormControl
            mb="4"
            id="amount"
            isInvalid={formik.touched?.amount && formik?.errors?.amount}
          >
            <Box display={"inline-block"}>
              <FormLabel display={"inline"}>Amount</FormLabel>
              <FormErrorMessage display={"inline"} fontSize="xs">
                {formik.touched?.amount && formik?.errors?.amount}
              </FormErrorMessage>
            </Box>
            <InputGroup>
              <InputLeftAddon>₹</InputLeftAddon>
              <Input
                onBlur={formik.handleBlur}
                value={formik.values.amount}
                onChange={formik.handleChange}
                type="amount"
                focusBorderColor="green.300"
              />
            </InputGroup>
          </FormControl>

          <Center>
            <Button
              isLoading={formik.isSubmitting}
              type="submit"
              color="white"
              bgColor="green.300"
              colorScheme={"green"}
              loadingText="Submitting"
              mt="4"
            >
              Submit
            </Button>
          </Center>
        </form>
      </Box>
    </Flex>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};
