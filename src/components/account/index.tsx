import './styles.css';
import { InstntSignUp } from '@instnt/instnt-react-js';
import { SERVICE_URL } from '../config';
import {useContext} from "react";
import AppContext from "../AppContext";
import {IUserSettings} from "../App";

const Reject = () => {
    const myContext: IUserSettings = useContext(AppContext);

    return (
    <>
      <aside className="feature-wrapper">
        <div className={'content'}>
          {myContext.formKey && <InstntSignUp
            serviceURL={SERVICE_URL}
            formId={myContext.formKey}
            hideFormFields={false}
          />}
        </div>
      </aside>
    </>
  );
};

export default Reject;
