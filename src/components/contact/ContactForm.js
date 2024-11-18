import React from "react";
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
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "92vh",
        backgroundColor: "#f3f4f6",
      }}
    >
      <Card sx={{ width: "50%", padding: 3, boxShadow: 3 }}>
        <CardContent>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 10,
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
          </div>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField label="Name" variant="outlined" fullWidth required />
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              fullWidth
              required
            />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Send Message
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ContactForm;
