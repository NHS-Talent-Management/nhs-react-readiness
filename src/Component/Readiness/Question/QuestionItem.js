import * as React from "react";
import {Link} from "react-router-dom";

export const QuestionItem = ({index, questions}) => {
    return (
        <div className="nhsuk-summary-list__row">
            <dt className="nhsuk-summary-list__key">
                {questions[index-1].name}
            </dt>

            <dd className="nhsuk-summary-list__value">
                {questions[index-1].selectedAnswer}
            </dd>

            <dd className="nhsuk-summary-list__actions">

                <Link to={{
                    pathname: '/edit',
                    questionId: questions[index-1].id,
                    editQuestion: questions[index-1],
                    questions: questions
                }}>
                    Change
                </Link>
            </dd>
        </div>
    );
};