import * as React from "react";
import * as PropTypes from "prop-types";

export class QuestionAnswerRadio extends React.Component {
    render() {
        return <div className="nhsuk-radios__item">

            <input className="nhsuk-radios__input"
                   id={this.props.id}
                   type="radio"
                   value={this.props.value}
                   name="answer"
                   checked={this.props.selectedAnswer === this.props.value}
                   onChange={this.props.onChange}
            />
            <label className="nhsuk-label nhsuk-radios__label"
                   htmlFor={this.props.id}>
                {this.props.value}
            </label>
        </div>;
    }
}

QuestionAnswerRadio.propTypes = {
    id: PropTypes.any,
    value: PropTypes.any,
    selectedAnswer: PropTypes.any,
    onChange: PropTypes.any
};