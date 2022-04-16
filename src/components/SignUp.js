import React from "react";
import State from "./State";
import City from "./City";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Grid, Paper, TextField, Button } from "@mui/material";

export default function SignUp() {
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 500,
  };
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    education: "",
  };
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("الزامی"),
    lastname: Yup.string().required("الزامی"),
    email: Yup.string().email("ایمیل معتبر نیست!").required("الزامی"),
    password: Yup.string()
      .min(8, "حداقل شامل 8 کاراکتر باشد")
      .required("الزامی"),
  });
  const onSubmit = (values, props) => {
    setTimeout(() => {
      props.setSubmitting(false);
    });
  };
  return (
    <>
      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <h5>رایگان ثبت نام کنید</h5>
          </Grid>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
                <Grid id="fullname">
                  <Field
                    sx={{ width: 240 }}
                    as={TextField}
                    name="firstname"
                    placeholder="نام"
                    helperText={<ErrorMessage name="firstname" />}
                  />
                  <Field
                    sx={{ width: 240 }}
                    as={TextField}
                    name="lastname"
                    placeholder="نام خانوادگی"
                    helperText={<ErrorMessage name="lastname" />}
                  />
                </Grid>
                <Field
                  as={TextField}
                  fullWidth
                  name="email"
                  placeholder="ایمیل"
                  helperText={<ErrorMessage name="email" />}
                />
                <Field
                  as={TextField}
                  fullWidth
                  name="password"
                  type="password"
                  placeholder="کلمه عبور"
                  helperText={<ErrorMessage name="password" />}
                />
                <Grid id="location">
                  <State id="state" />
                  <City id="city" />
                </Grid>
                <Field
                  as={TextField}
                  fullWidth
                  name="education"
                  placeholder="تحصیلات"
                  helperText={<ErrorMessage name="education" />}
                />

                <Button
                  type="submit"
                  variant="contained"
                  disabled={props.isSubmitting}
                  color="primary"
                  fullWidth
                  sx={{ mt: 3 }}
                >
                  {props.isSubmitting ? "Loading" : "ثبت نام"}
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </>
  );
}
