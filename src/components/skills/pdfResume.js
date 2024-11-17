import React, { useState } from "react";
import { Modal, Box, Button, Typography, Stack } from "@mui/material";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

import Puffer from "../../pages/images/pufferjacket-snoopy.jpg";
import CandyCorn from "../../pages/images/candycorn-snoopy.jpg";
import Resume from "../../pages/images/resume/resume.pdf";
import CV from "../../pages/images/resume/cv.pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css"; // For annotation layer styles
import "react-pdf/dist/esm/Page/TextLayer.css"; // For text layer styles

// Set the worker URL for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@4.4.168/build/pdf.worker.mjs`;

const PdfViewer = () => {
  const [open, setOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null); // For error handling

  const pdfs = [
    {
      name: "Current Resume",
      src: Resume,
      thumbnail: Puffer,
    },
    {
      name: "CV (College to Present)",
      src: CV,
      thumbnail: CandyCorn,
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
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: 2,
              textAlign: "center",
              cursor: "pointer",
              width: "200px",
              "&:hover": { boxShadow: 4 },
            }}
            onClick={() => handleOpen(pdf)}
          >
            <img
              src={pdf.thumbnail}
              alt={pdf.name}
              style={{ maxWidth: "100%", borderRadius: "4px" }}
            />
            <Typography variant="subtitle1" mt={1}>
              {pdf.name}
            </Typography>
          </Box>
        ))}
      </Stack>

      {/* Modal to view the selected PDF */}
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
              <Typography variant="h6" gutterBottom>
                {selectedPdf.name}
              </Typography>
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
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Page key={index} pageNumber={index + 1} />
                  </div>
                ))}
              </Document>
              <Button onClick={handleClose} variant="contained" sx={{ mt: 2 }}>
                Close
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default PdfViewer;
