import {
  createTheme,
  MenuItem,
  MuiThemeProvider,
  TextField,
} from "@material-ui/core";
import { StepHeaders, StepInputs, SignupData } from "common/models/index";
// @ts-ignore
import {IMaskInput} from 'react-imask';

import "./styles.css";

const theme = createTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        position: "relative",
        "& $notchedOutline": {
          borderColor: "rgba(0, 0, 0, 0.23)",
        },
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: "#0082b1",
          "@media (hover: none)": {
            borderColor: "rgba(0, 0, 0, 0.23)",
          },
        },
        "&$focused $notchedOutline": {
          borderColor: "#0082b1",
          borderWidth: 1,
        },
      },
    },
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "#0082b1",
        },
      },
    },
  },
});

type emptyChange = () => void;
type maskedChange = (element: any, value: any) => void;

interface Props {
  data: SignupData;
  step: number;
  isError?: boolean;
  stepInputs: StepInputs[];
  stepLabels: StepHeaders;
  onChange: emptyChange | maskedChange;
}

const StepItem = ({ data, step, stepInputs, stepLabels, onChange, isError }: Props) => {
  const getHeader = () => {
    switch (step) {
      case 0:
        return stepLabels.header;
      case 1:
      case 3:
        return data.firstName || "";
      case 2:
        return "";
      default:
        return "";
    }
  };

  const TextMaskCustom = (props: any) => {
    const { inputRef, ...other } = props;

    return (
        <IMaskInput
            {...other}
            mask="(000) 000-0000"
            onAccept={(_value: any, maskOptions: any) => {
              onChange(other.id, maskOptions._unmaskedValue)
              document.getElementById(other.id)?.focus()
            }}
        />
    );
  };

  const getInput = (item: StepInputs) => {
    const isInvalid = data[item.id]?.length > 0 && item.validator && !item.validator.test((data[item.id] || "").toLowerCase());
    return !item.isSelect ? (
      item.isPhone ? (
          <TextField
              id={item.id}
              key={item.id}
              name={item.id}
              variant="outlined"
              type={"tel"}
              className={data[item.id] ? "filled" : ""}
              label={item.label}
              style={{ minWidth: "230px" }}
              value={data[item.id]}
              InputProps={{
                inputComponent: TextMaskCustom
              }}
              autoComplete={item.autocomplete}
              error={isInvalid}
              helperText={isInvalid ? "This value is invalid" : " "}
          />
      ) : (
          <TextField
            id={item.id}
            key={item.id}
            name={item.id}
            variant="outlined"
            type={item.type || "text"}
            label={item.label}
            value={data[item.id] || ""}
            style={{ minWidth: "230px" }}
            onChange={onChange as emptyChange}
            autoComplete={item.autocomplete}
            error={isInvalid}
            helperText={isInvalid ? "This value is invalid" : " "}
          />
      )) : (
        <TextField
          key={item.id}
          name={item.id}
          value={data[item.id] || item.options![0]}
          style={{ minWidth: "230px" }}
          select
          label={item.label}
          variant="outlined"
          onChange={onChange as emptyChange}
          error={isInvalid}
          helperText={isInvalid ? "This value is invalid" : " "}
        >
          <MenuItem
            id={`${item.id} disabled`}
            className={"select"}
            key={`${item.id} disabled`}
            value={""}
            disabled
          >
            Choose:
          </MenuItem>
          {item.options?.map((option) => (
            <MenuItem id={option} key={option} value={option} selected={option === item.default}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      );
  };

  return (
    <div className="step-wrapper">
      <div>
        <h1 className="step-header">{getHeader()}</h1>
        <p className="step-paragraph">
          {step === 2
            ? `${stepLabels.paragraph} ${data.mobileNumber}.`
            : stepLabels.paragraph}
        </p>
      </div>
      <div className="step-form">
        <MuiThemeProvider theme={theme}>
          {stepInputs.map((item) => getInput(item))}
        </MuiThemeProvider>
      </div>
      {isError && <span>Something went wrong, check you data</span>}
    </div>
  );
};

export default StepItem;
