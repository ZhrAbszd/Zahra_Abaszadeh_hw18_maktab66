import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const states = [
  "آذربایجان شرقی",
  "آذربایجان غربی ",
  "اردبیل",
  "اصفهان ",
  "البرز ",
  "ایلام ",
  "بوشهر ",
  "تهران ",
  "چهارمحال و بختیاری",
  "خراسان جنوبی"
];

function getStyles(name, statesName, theme) {
  return {
    fontWeight:
      statesName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function State() {
  const theme = useTheme();
  const [statesName, setstatesName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setstatesName(
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ width: 240, my: 0.5 }}>
        <Select
          multiple
          displayEmpty
          value={statesName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>استان</em>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <em>استان مورد نظر را انتخاب کنید</em>
          </MenuItem>
          {states.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, statesName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
