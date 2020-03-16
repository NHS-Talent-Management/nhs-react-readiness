import React, {Component} from "react";
import {QuestionItem} from "./QuestionItem";

export default class QuestionList extends Component {

    questionToQuestionItem = question => {
        return <QuestionItem index={question.index} questions={this.props.questions} key={question.id}/>;
    };

    render() {
        return (
            <div className="nhsuk-care-card__content">
                <dl className="nhsuk-summary-list">
                    {this.props.questions.map(this.questionToQuestionItem)}
                </dl>
            </div>
        )
    }
};