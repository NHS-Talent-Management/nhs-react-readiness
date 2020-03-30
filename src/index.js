import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import App from './App';

window.portal_path = "https://dev02.nonlive.nhs.placecube.com";
window.portal_sign_up = window.portal_path + "/sign-up";
window.portal_my_profile = window.portal_path + "/my-profile";
window.headlessPath = window.portal_path + "/o/nhs-headless-user-readiness/1.0.0/user-profile";
window.headlessPath_questionnaire = window.headlessPath + "/questionnaire";
window.headlessPath_questionnaire_intro = window.headlessPath + "/questionnaire-intro";
window.headlessPath_question = window.headlessPath + "/question/";
window.router_basename = "/readiness"; 

ReactDOM.render(<App/>, document.getElementById('root'));