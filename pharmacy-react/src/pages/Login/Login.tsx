import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        bgcolor: "rgba(0, 0, 0, 0.6)",
        zIndex: 1300,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "stretch",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: 400 },
          maxWidth: 500,
          height: "100%",
          bgcolor: "#fff",
          px: 4,
          py: 5,
          position: "relative",
          boxShadow: 3,
        }}
      >
        {/* Close button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            bgcolor: "#f0f0f0",
            ":hover": { bgcolor: "#e0e0e0" },
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Heading */}
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Welcome Back 👋
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
          Quick login / register using your mobile number
        </Typography>

        {/* Phone Input */}
        <input
          type="tel"
          placeholder="Enter phone number"
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />

        {/* Send OTP Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 3, py: 1.5, fontWeight: "bold", fontSize: "16px" }}
        >
          Send OTP
        </Button>
      </Box>
    </Box>
  );
};

export default LoginModal;