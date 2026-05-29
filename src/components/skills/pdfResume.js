import { useState } from "react";
import { Modal, Box, Button, Typography, Stack } from "@mui/material";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

import Resume from "../../pages/images/resume/resume.pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@4.4.168/build/pdf.worker.mjs`;

const PdfViewer = () => {
  const [open, setOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null);

  const pdfs = [
    {
      name: "Current Resume",
      src: Resume,
    },
  ];

  const handleOpen = (pdf) => {
    setSelectedPdf(pdf);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPdf(null);
    setError(null); // Reset error state on close
  };

  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setError(null); // Reset error state on successful load
  };

  const onLoadError = (error) => {
    console.error("Error loading PDF:", error);
    setError("Failed to load PDF. Please try again.");
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        flexWrap="wrap"
        sx={{ gap: 2 }}
      >
        {pdfs.map((pdf, index) => (
          <Box
            key={index}
            sx={{
              border: "1px solid rgba(28, 42, 75, 0.12)",
              borderRadius: "12px",
              padding: 2.5,
              textAlign: "center",
              cursor: "pointer",
              width: "220px",
              backgroundColor: "#fff",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              "&:hover": {
                boxShadow: "0 8px 24px rgba(17, 24, 39, 0.12)",
                transform: "translateY(-2px)",
              },
            }}
            onClick={() => handleOpen(pdf)}
          >
            <Box
              sx={{
                width: "100%",
                height: "240px",
                borderRadius: "8px",
                background:
                  "linear-gradient(180deg, rgba(25,118,210,0.12) 0%, rgba(25,118,210,0.05) 100%)",
                border: "1px solid rgba(25,118,210,0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#1b2b52",
              }}
              aria-label="Resume icon"
            >
              <Typography sx={{ fontSize: "3rem", lineHeight: 1 }}>
                📄
              </Typography>
              <Typography sx={{ fontWeight: 700, letterSpacing: "0.08em" }}>
                RESUME
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="pdf-modal"
        aria-describedby="pdf-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "80%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            overflow: "auto",
          }}
        >
          {selectedPdf && (
            <>
              {error && (
                <Typography color="error" variant="body2" gutterBottom>
                  {error}
                </Typography>
              )}
              <Document
                file={selectedPdf.src}
                onLoadSuccess={onLoadSuccess}
                onLoadError={onLoadError}
              >
                {Array.from(new Array(numPages), (_, index) => (
                  <div
                    key={index}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Page pageNumber={index + 1} />
                  </div>
                ))}
              </Document>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "16px",
                }}
              >
                <Button
                  onClick={handleClose}
                  variant="contained"
                  sx={{ mt: 2 }}
                >
                  Close
                </Button>
              </div>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default PdfViewer;
