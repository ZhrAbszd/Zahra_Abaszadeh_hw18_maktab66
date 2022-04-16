import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";

export default function Login({ handleChange }) {
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 500,
  };
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("ایمیل معتبر نیست !").required("الزامی"),
    password: Yup.string()
      .min(8, "حداقل شامل 8 کاراکتر باشد")
      .required("الزامی")
  });
  const onSubmit = (values, props) => {
    console.log(values);
    setTimeout(() => {
      props.setSubmitting(false);
    });
  };
  return (
    <>
      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <h5>خوش آمدید</h5>
          </Grid>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  name="email"
                  placeholder="ایمیل "
                  fullWidth
                  required
                  helperText={<ErrorMessage name="email" />}
                />
                <Field
                  as={TextField}
                  name="password"
                  placeholder="کلمه عبور"
                  type="password"
                  fullWidth
                  required
                  helperText={<ErrorMessage name="password" />}
                />
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  disabled={props.isSubmitting}
                  fullWidth
                  sx={{ mt: 3 }}
                >
                  {props.isSubmitting ? "Loading" : "ورود"}
                </Button>
              </Form>
            )}
          </Formik>
          <Typography>
            {" "}
            حساب کاربری ندارید ؟
            <Link
              href="#"
              onClick={() => handleChange("event", 1)}
            >
              ثبت نام
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  );
}
