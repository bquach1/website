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
import styled from "styled-components";

const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #1f1f1f;
  padding: 40px 20px;
  font-family: "Poppins", sans-serif;
`;

const FormContainer = styled.div`
  max-width: 500px;
  width: 100%;
`;

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
    <ContactWrapper>
      <FormContainer>
        <Card
          sx={{
            padding: 4,
            backgroundColor: "rgba(201, 149, 110, 0.08)",
            border: "1px solid #c9956e",
            borderRadius: "12px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          }}
        >
          <CardContent>
            <Box sx={{ marginBottom: 3, textAlign: "center" }}>
              <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 1 }}>
                <Tooltip
                  title="Any questions, feedback, or requests? Feel free to fill out this form and send an email!"
                  placement="top"
                >
                  <InfoIcon
                    sx={{
                      marginRight: "10px",
                      color: "#c9956e",
                      fontSize: "1.5rem",
                    }}
                  />
                </Tooltip>
              </Box>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  color: "#f5f1ed",
                  fontWeight: 700,
                  letterSpacing: "0.5px",
                }}
              >
                Get in Touch
              </Typography>
              <Typography
                sx={{
                  color: "#b3aba3",
                  marginTop: 1,
                  fontSize: "0.9rem",
                }}
              >
                Send me a message and I'll get back to you as soon as possible.
              </Typography>
            </Box>

            {/* Form Section */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
            >
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                {...register("name", { required: "Name is required" })}
                error={!!errors.name}
                helperText={errors.name?.message}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "#f5f1ed",
                    "& fieldset": {
                      borderColor: "rgba(201, 149, 110, 0.3)",
                    },
                    "&:hover fieldset": {
                      borderColor: "#c9956e",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#c9956e",
                    },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#b3aba3",
                    opacity: 1,
                  },
                  "& .MuiInputLabel-root": {
                    color: "#b3aba3",
                  },
                }}
              />
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                {...register("email", { required: "Email is required" })}
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "#f5f1ed",
                    "& fieldset": {
                      borderColor: "rgba(201, 149, 110, 0.3)",
                    },
                    "&:hover fieldset": {
                      borderColor: "#c9956e",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#c9956e",
                    },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#b3aba3",
                    opacity: 1,
                  },
                  "& .MuiInputLabel-root": {
                    color: "#b3aba3",
                  },
                }}
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
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "#f5f1ed",
                    "& fieldset": {
                      borderColor: "rgba(201, 149, 110, 0.3)",
                    },
                    "&:hover fieldset": {
                      borderColor: "#c9956e",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#c9956e",
                    },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#b3aba3",
                    opacity: 1,
                  },
                  "& .MuiInputLabel-root": {
                    color: "#b3aba3",
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: "#c9956e",
                  color: "#1f1f1f",
                  fontWeight: 700,
                  fontSize: "1rem",
                  padding: "12px",
                  borderRadius: "6px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  "&:hover": {
                    backgroundColor: "#a8d5a8",
                  },
                }}
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </FormContainer>
    </ContactWrapper>
  );
};

export default ContactForm;
