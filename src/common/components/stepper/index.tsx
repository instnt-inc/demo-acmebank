import {
  makeStyles,
  Theme,
  createStyles,
  createTheme,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Loader from 'react-loader-spinner';

import "./styles.css"

const muiTheme = createTheme({
  overrides: {
    MuiStepIcon: {
      root: {
        "&$active": {
          color: "#0082b1",
        },
        "&$completed": {
          color: "#0082b1",
        },
      },
    },
  },
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    btns: {
      width: "95%",
      display: "flex",
      justifyContent: "flex-end",
    },
    nextBtn: {
      background: "#0082b1",
    },
  })
);

interface Props {
  activeStep: number;
  stepsLabels: string[];
  nextDisabled: boolean;
  loader?: boolean;
  onSubmit: () => void;
  onNextStep: () => void;
  onBackStep: () => void;
}

const ProgressStepper = ({
  stepsLabels,
  activeStep,
  nextDisabled,
  onSubmit,
  onNextStep,
  onBackStep,
  loader
}: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={muiTheme}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {stepsLabels.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </MuiThemeProvider>
      <div className={classes.btns}>
        {activeStep === stepsLabels.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
          </div>
        ) : (
          <div>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={onBackStep}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                disabled={nextDisabled || loader}
                id={loader ? "loader" : ""}
                onClick={
                  activeStep === stepsLabels.length - 1 ? onSubmit : onNextStep
                }
                classes={{
                  root: classes.nextBtn,
                }}
              >
                {activeStep === stepsLabels.length - 1 ?
                    !loader ? "Finish" :
                        <Loader
                            type="Puff"
                            color="#00BFFF"
                            height={25}
                            width={25}
                            visible={loader}
                        />
                    : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressStepper;
