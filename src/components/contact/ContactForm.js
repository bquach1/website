import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import {
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Tooltip,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const serviceId = "service_fswj57o";
    const templateId = "template_we3pbu3";
    const userId = "SHDLQUE3lEq6avrDr";
    const emailData = {
      from_name: data.name,
      to_name: "Bruce",
      message: data.message,
      from_email: data.email,
      reply_to: data.email,
    };

    emailjs
      .send(serviceId, templateId, emailData, userId)
      .then(() => {
        alert("Message sent successfully!");
        reset();
      })
      .catch(() => {
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "92vh",
        backgroundColor: "#f3f4f6",
        padding: 2,
      }}
    >
      <Card sx={{ width: "100%", maxWidth: 500, padding: 3, boxShadow: 3 }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 2,
            }}
          >
            <Tooltip
              title="Any questions, feedback, or requests? Feel free to fill out this form and send an email!"
              placement="top"
            >
              <InfoIcon style={{ marginRight: 10 }} />
            </Tooltip>
            <Typography variant="h5" component="h2">
              Contact Me
            </Typography>
          </Box>

          {/* Form Section */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              {...register("name", { required: "Name is required" })}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              fullWidth
              {...register("email", { required: "Email is required" })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              {...register("message", { required: "Message is required" })}
              error={!!errors.message}
              helperText={errors.message?.message}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ContactForm;
