import * as React from "react";
import {Component} from "react";
import {QuestionAnswerRadio} from "./QuestionAnswerRadio";
import {getToken} from "../../../Utils/Common";

export default class QuestionEdit extends Component {

    constructor(props) {
        super(props);
        this.onClickRadioInput = this.handleOptionChange.bind(this);
        this.onSaveAndNext = this.handleSaveAndNext.bind(this);
        this.onBack = this.handleOnBack.bind(this);
        this.state = {
            selectedAnswer: this.props.location.editQuestion.selectedAnswer,
            question: this.props.location.editQuestion
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.buttonNext.blur();
        if (this.buttonPrev != null) {
            this.buttonPrev.blur();
        }
    }

    handleOptionChange(event) {
        this.setState({
            selectedAnswer: event.target.value
        });
    }

    handleOnBack(event) {
        const prevQuestion = this.props.location.questions[this.state.question.index - 2];
        this.updateViewQuestion(prevQuestion.id);
    }

    handleSaveAndNext(event) {
        fetch(window.headlessPath_question + this.state.question.id, {
        	"async": true,
            "crossDomain": true,
        	"method": "PUT",
            "headers": {
                "Authorization": "Basic "+ getToken(),
                "Content-Type": "text/plain"
            },
            body: this.state.selectedAnswer
        }).catch(console.log)

        if (this.state.question.index + 1 <= this.props.location.questions.length) {
            const nextQuestion = this.props.location.questions[this.state.question.index];
            this.updateViewQuestion(nextQuestion.id);
        } else {
            this.props.history.push("/thankYou");
        }
    }

    updateViewQuestion(questionId) {
        fetch(window.headlessPath_question + questionId, {
            "async": true,
            "crossDomain": true,
            "method": "GET",
            "headers": {
                "Authorization": "Basic "+ getToken(),
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then((data) => {
                this.setState({
                    question: data,
                    selectedAnswer: data.selectedAnswer
                })
            }).catch(console.log)
    }

    render() {
        return (
            <div>
                <div className="row nhsuk-u-margin-bottom-4">
                    <div className="col-md-12">

                        Question {this.state.question.index} of {this.props.location.questions.length}
                    </div>
                </div>
                <div className="nhsuk-form-group col-md-12">
                    <fieldset className="nhsuk-fieldset">
                        <legend className="nhsuk-fieldset__legend nhsuk-fieldset__legend--l">
                            <h1 className="nhsuk-fieldset__heading">
                                {this.state.question.name}
                            </h1>
                        </legend>

                        <div className="nhsuk-radios">
                            {this.state.question.options.map((value, index) =>
                                <QuestionAnswerRadio key={index} id={index} value={value}
                                                     selectedAnswer={this.state.selectedAnswer}
                                                     onChange={this.onClickRadioInput}/>
                            )}
                        </div>
                    </fieldset>
                </div>
                <div className="button-holder nhsuk-u-margin-top-8 col-md-12">
                    <div className="row">
                        <div className="col-md-6">
                            {this.state.question.index > 1 &&
                            <button ref={(buttonPrev) => {
                                this.buttonPrev = buttonPrev;
                            }} className="nhsuk-button nhsuk-button--secondary w-100" onClick={this.onBack}>
                                Change my previous answer
                            </button>
                            }
                        </div>

                        <div className="col-md-6">
                            <button ref={(buttonNext) => {
                                this.buttonNext = buttonNext;
                            }} className="nhsuk-button nhs-sign-in-modal w-100" onClick={this.onSaveAndNext} >
                                Save and Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}