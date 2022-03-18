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

export const PostSchema = Yup.object().shape({
  amount: Yup.number().required("* Required"),
});

function Pay() {
  const router = useRouter();
  const { PayId } = router.query;

  const formik = useFormik({
    initialValues: { amount: "" },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const data = await fetch(`/api/auth/pay/${PayId}`, {
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
    validationSchema: PostSchema,
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
              <InputLeftAddon children="₹" />
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

export default Pay;
