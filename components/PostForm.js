import {
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Box,
  Button,
  Center,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

export const PostSchema = Yup.object().shape({
  name: Yup.string().required("* Required"),
  phone: Yup.string().required("* Required"),
  tenure: Yup.number().required("* Required"),
  amount: Yup.number().required("* Required"),
});

export default function PostForm() {
  const formik = useFormik({
    initialValues: { name: "", phone: "", tenure: "", amount: "" },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const data = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then((res) => res.json());

      setSubmitting(false);

      if (data?.id) {
        resetForm();
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
            id="name"
            isInvalid={formik.touched?.name && formik?.errors?.name}
          >
            <Box display={"inline-block"}>
              <FormLabel display={"inline"}>Name</FormLabel>
              <FormErrorMessage display={"inline"} fontSize="xs">
                {formik.touched?.name && formik?.errors?.name}
              </FormErrorMessage>
            </Box>
            <Input
              onBlur={formik.handleBlur}
              value={formik.values.name}
              onChange={formik.handleChange}
              type="name"
              focusBorderColor="green.300"
            />
          </FormControl>

          <FormControl
            mb="4"
            id="phone"
            isInvalid={formik.touched?.phone && formik?.errors?.phone}
          >
            <Box display={"inline-block"}>
              <FormLabel display={"inline"}>Phone No</FormLabel>
              <FormErrorMessage display={"inline"} fontSize="xs">
                {formik.touched?.phone && formik?.errors?.phone}
              </FormErrorMessage>
            </Box>
            <Input
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              onChange={formik.handleChange}
              type="phone"
              focusBorderColor="green.300"
            />
          </FormControl>

          <FormControl
            mb="4"
            id="tenure"
            isInvalid={formik.touched?.tenure && formik?.errors?.tenure}
          >
            <Box display={"inline-block"}>
              <FormLabel display={"inline"}>Tenure</FormLabel>
              <FormErrorMessage display={"inline"} fontSize="xs">
                {formik.touched?.tenure && formik?.errors?.tenure}
              </FormErrorMessage>
            </Box>
            <Input
              onBlur={formik.handleBlur}
              value={formik.values.tenure}
              onChange={formik.handleChange}
              type="tenure"
              focusBorderColor="green.300"
            />
          </FormControl>

          <FormControl
            mb="4"
            id="amount"
            isInvalid={formik.touched?.amount && formik?.errors?.amount}
          >
            <Box display={"inline-block"}>
              <FormLabel display={"inline"}>amount</FormLabel>
              <FormErrorMessage display={"inline"} fontSize="xs">
                {formik.touched?.amount && formik?.errors?.amount}
              </FormErrorMessage>
            </Box>
            <Input
              onBlur={formik.handleBlur}
              value={formik.values.amount}
              onChange={formik.handleChange}
              type="amount"
              focusBorderColor="green.300"
            />
          </FormControl>

          <Center>
            <Button type="submit" color="green.400" mt="4">
              Submit
            </Button>
          </Center>
        </form>
      </Box>
    </Flex>
  );
}
