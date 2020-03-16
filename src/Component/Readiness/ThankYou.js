import * as React from "react";
import {Component} from "react";

export default class Edit extends Component {
    render() {
        return (
            <div className="readiness-intro-message">
                <h1>Thank you</h1>
                <p className="nhsuk-body">
                    Thank you for completing your NHS Readiness App. Why not take a few moments to review your findings in the Talent Platform or on one of your chosen IT systems.
                    This App information is subject to continuous change so it is recommended that you review / refresh this information at least every 3 months.
                </p>

                <div className="row">
                    <div className="col-md-6">
                        <a href="/readiness" className="nhsuk-button w-100">
                            View summary
                        </a>
                    </div>

                    <div className="col-md-6">
                        <a href={window.portal_my_profile} className="nhsuk-button nhsuk-button--secondary w-100">
                            Go to the Talent Platform
                        </a>
                    </div>
                </div>

            </div>
        )
    }
}