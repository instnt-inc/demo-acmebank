import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { InstntCustomSignUp } from '@instnt/instnt-react-js';

import StepItem from './step-item';
import { steps, stepsInputs, stepsHeaders } from 'common/consts/index';
import ProgressStepper from 'common/components/stepper';

import './styles.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { validateEmail, validatePhone } from '../../common/helpers';
import { SERVICE_URL } from '../config';

import { useContext } from 'react';
import AppContext from '../AppContext';

const SignUp = () => {
  const [data, setData] = useState({
    email: ' ',
  });
  const [numStep, setNumStep] = useState(0);
  const [nextDisabled, setNextDisabled] = useState(true);
  const [loader, setLoader] = useState(false);
  const [timer, setTimer] = useState(null);
  const history = useHistory();

  useEffect(() => {
    setNextDisabled(
      !(
        (numStep === 0 && data.firstName && data.surName) ||
        (numStep === 1 &&
          validateEmail(data.email) &&
          validatePhone(data.mobileNumber)) ||
        (numStep === 2 && data.code) ||
        (numStep === 3 && data.physicalAddress && data.city && data.zip)
      )
    );
  }, [data, numStep]);

  const onChange = (element, value = null) => {
    document.querySelector('.alert-danger').classList.add('hide');
    document.querySelector('.messageSpan').innerHTML = '';

    if (typeof element === 'string') {
      setData({ ...data, [element]: value });
    } else {
      setData({ ...data, [element.target.name]: element.target.value });
    }
  };

  const onNextStep = () => {
    setNumStep((prevStep) => {
      return prevStep === 1 ? prevStep + 2 : prevStep + 1; // Skip phone verification step
    });
    numStep < 3 && setNextDisabled(true);
  };

  const onBackStep = () => {
    setNumStep((prevStep) => {
      return prevStep === 3 ? prevStep - 2 : prevStep - 1; // Skip phone verification step
    });
    setNextDisabled(false);
  };

  const onSubmit = function () {
    setLoader(true);
    window.instnt.submitCustomForm({
      ...data,
      mobileNumber: `1${data.mobileNumber}`,
    });
  };

  const onResponse = (error, data) => {
    console.log(error || data);
    if (data) {
      switch (data.decision) {
        case 'ACCEPT':
          history.push('/welcome.html');
          break;
        case 'REJECT':
          history.push('/reject.html');
          break;
        case 'REVIEW':
          history.push('/review.html');
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    if (loader) {
      setTimer(
        setInterval(function () {
          const elem = document.querySelector('.messageSpan');
          if (elem?.innerText) {
            setLoader(false);
          }
        }, 1000)
      );
    } else {
      clearInterval(timer);
      setTimer(null);
    }
  }, [loader, timer]);

  const myContext = useContext(AppContext);

  return (
    <div className="signup-container">
      <div>
        {myContext.formKey && (
          <InstntCustomSignUp
            serviceURL={SERVICE_URL}
            formId={myContext.formKey}
            redirect={false}
            onResponse={onResponse}
          />
        )}
        <StepItem
          data={data}
          step={numStep}
          stepInputs={stepsInputs[numStep]}
          stepLabels={stepsHeaders[numStep]}
          onChange={onChange}
        />
        <div className="onpage-message">
          <div className="alert alert-danger hide">
            <span className="messageSpan"></span>
          </div>
        </div>
      </div>
      <ProgressStepper
        activeStep={numStep}
        stepsLabels={steps}
        loader={loader}
        nextDisabled={nextDisabled}
        onNextStep={onNextStep}
        onBackStep={onBackStep}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default SignUp;
