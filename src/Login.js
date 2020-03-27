import React, {useState} from 'react';
import {setUserSession} from './Utils/Common';

function Login(props) {
    const [loading, setLoading] = useState(false);
    const emailAddress = useFormInput('');
    const password = useFormInput('');
    const [errorAuth, setErrorAuth] = useState(null);

    const requestAuthGetQuestions = async () => {
        const authorizationToken = Buffer.from(emailAddress.value+":"+password.value,"utf-8").toString("base64");
        const response = await fetch(window.headlessPath_questionnaire, {
            "async": true,
            "crossDomain": true,
            "method": "GET",
            "headers": {
                "Authorization": "Basic " + authorizationToken,
                "Content-Type": "application/json"
            }
        });
        if(response.ok){
            const json = await response.json();
            setUserSession(authorizationToken,emailAddress.value);
            return await json.items;
        }else{
            setErrorAuth("Authentication failed. Please try again");
            return undefined;
        }
    }

    const handleLogin = async () => {
        setLoading(true);
            const questions = await requestAuthGetQuestions();
            if(questions !== undefined) {
                props.history.push({
                    pathname: '/introduction',
                    state: { questions: questions }
                });
            }
        setLoading(false);
    }

    return (
            <div>
                <div><h2>Login</h2></div>
                <div>
                    {errorAuth &&
                    <div className="nhsuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabIndex="-1">
                        <h2 className="nhsuk-error-summary__title" id="error-summary-title">
                            There is a problem
                        </h2>
                        <div className="nhsuk-error-summary__body">
                            <p>
                                {errorAuth}
                            </p>
                        </div>
                    </div>
                    }

                    <div className="nhsuk-form-group">
                        <label className="nhsuk-label">
                            Email address
                        </label>
                        <input type="username" {...emailAddress}
                               className="nhsuk-input "/>
                    </div>

                    <div className="nhsuk-form-group">
                        <label className="nhsuk-label">
                            Password
                        </label>
                        <input type="password" {...password}
                               className="nhsuk-input" />
                    </div>

                </div>

                <button className="nhsuk-button nhs-sign-out-modal" disabled={loading} onClick={handleLogin}>
                    {loading ? 'Loading...' : 'Login'}
                </button>
            </div>
    );
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default Login;