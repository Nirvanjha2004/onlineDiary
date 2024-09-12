import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { updateThemeSuccess } from "../features/counter/themeSlice";
import { useDispatch } from "react-redux";

export default function BasicSelect() {
  const dispatch = useDispatch();
  const [theme, setTheme] = React.useState("red");

  const handleChange = (event: SelectChangeEvent) => {
    const newTheme = event.target.value as string;
    setTheme(newTheme); // Update local state
    dispatch(updateThemeSuccess(newTheme));
  };

  return (
    <Box sx={{ minWidth: 100, textAlign: "center" }}>
      <FormControl
        sx={{
          minWidth: 10,
          maxHeight: 10,
          position: "center",
          textAlign: "center",
        }}
        fullWidth
      >
        <InputLabel
          sx={{
            fontSize: "0.8rem",
            textAlign: "center",
          }}
          id="demo-simple-select-label"
        >
          Theme
        </InputLabel>
        <Select
          sx={{ minWidth: 10, maxHeight: 20 }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={theme}
          label="Theme"
          defaultValue="red"
          onChange={handleChange}
        >
          <MenuItem sx={{ fontSize: "0.8rem" }} value={"red"}>
            RED
          </MenuItem>
          <MenuItem sx={{ fontSize: "0.8rem" }} value={"green"}>
            GREEN
          </MenuItem>
          <MenuItem sx={{ fontSize: "0.8rem" }} value={"blue"}>
            BLUE
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
