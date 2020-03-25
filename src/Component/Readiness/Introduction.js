import * as React from "react";
import {Component} from "react";
import {Link} from "react-router-dom";
import {getToken} from "../../Utils/Common";

export default class Edit extends Component {
   constructor(props) {
       super(props);
       this.state = {
           introductionContent: "",
           showIntroducion: false
       };
   }

   componentDidMount = async () => {
       const content = await this.getIntroducionContent();
       this.setState({introductionContent: content});
   }

    render() {
        return (

            <div>
                    <div dangerouslySetInnerHTML={{ __html: this.state.introductionContent }} />

                    <div hidden={this.state.introductionContent===""}>
                        <Link to={{
                            pathname: '/edit',
                            editQuestion: this.props.location.state.questions[0],
                            questions: this.props.location.state.questions,
                        }} >
                            <button className="nhsuk-button nhs-sign-in-modal">
                                Continue
                            </button>
                        </Link>
                    </div>
            </div>
        )
    }

    getIntroducionContent = async () => {
        const response = await fetch(window.headlessPath_questionnaire_intro, {
            "async": true,
            "crossDomain": true,
            "method": "GET",
            "headers": {
                "Authorization": "Basic "+ getToken(),
                "Content-Type": "application/xml"
            }
        }).catch(console.log)
        const text = await response.text();
        return text;
    }
}