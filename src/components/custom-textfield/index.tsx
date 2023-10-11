import { styled, TextField } from "@mui/material";

export const CustomTextField = styled(TextField)({
  "& .Mui-focused": {
    backgroundColor: "#505050",
  },
  "& .MuiInput-underline:after": {
    border: "none",
  },
  "& .MuiOutlinedInput-root": {
    color: "white",
    height: "30px",
    width: "190px",
    borderRadius: 0,
    "& fieldset": {
      border: "none",
    },
  },
});
