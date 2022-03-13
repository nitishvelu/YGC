import {
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Box,
  Button,
  Center,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

export const PostSchema = Yup.object().shape({
  title: Yup.string().required("* Required"),
  body: Yup.string().required("* Required"),
});

export default function PostForm() {
  const formik = useFormik({
    initialValues: { title: "", body: "" },
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
            id="title"
            isInvalid={formik.touched?.title && formik?.errors?.title}
          >
            <FormLabel>Title</FormLabel>
            <Input
              onBlur={formik.handleBlur}
              value={formik.values.title}
              onChange={formik.handleChange}
              type="title"
              focusBorderColor="green.300"
            />
            <FormErrorMessage>
              {formik.touched?.title && formik?.errors?.title}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            id="body"
            isInvalid={formik.touched?.body && formik?.errors?.body}
          >
            <FormLabel>Body</FormLabel>
            <Textarea
              onBlur={formik.handleBlur}
              value={formik.values.body}
              onChange={formik.handleChange}
              focusBorderColor="green.300"
              type="body"
            />
            <FormErrorMessage>
              {formik.touched?.body && formik?.errors?.body}
            </FormErrorMessage>
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
