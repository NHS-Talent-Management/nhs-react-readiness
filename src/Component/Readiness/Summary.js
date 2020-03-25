import React, {Component} from 'react';
import QuestionList from './Question/QuestionList';
import {FaPencilAlt} from 'react-icons/fa'
import {getToken} from "../../Utils/Common";

export default class Readiness extends Component {

    constructor(props) {
        super(props);
        this.onClickPencil = this.redirectToIntroduction.bind(this);
        this.state = {
            questions: [],
        };
    }

    redirectToIntroduction(){
         this.props.history.push({
            pathname: '/introduction',
            state: { questions: this.state.questions }
        });
    }

    render() {
        return (

            <div className="nhsuk-care-card nhsuk-care-card--non-urgent">
                <div className="nhsuk-care-card__heading-container">
                    <h3 className="nhsuk-care-card__heading">
                        <span>
                            Career Readiness
                        </span>
                        <span className="action-icon float-right" onClick={this.onClickPencil} style={{cursor: 'pointer' }}>
                                 <FaPencilAlt/>
                        </span>
                    </h3>
                </div>
                <QuestionList questions={this.state.questions}/>
            </div>
        )
    }

    componentDidMount() {
        this.geQuestions();

    }

    geQuestions = () => {
        fetch(window.headlessPath_questionnaire, {
            "async": true,
            "crossDomain": true,
            "method": "GET",
            "headers": {
                "Authorization": "Basic "+ getToken(),
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then((data) => {
                this.setState({questions: data['items']})
            }).catch(console.log)
    }

}