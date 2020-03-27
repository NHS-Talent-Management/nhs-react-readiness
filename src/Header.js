import React, {Component} from 'react';
import {getUser, removeUserSession} from './Utils/Common';

export default class Header extends Component {
    constructor() {
        super();
        this.state = {user: getUser()};
        this.onClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        removeUserSession();
    }


    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() {
        this.setState({
            user: getUser()
        });
    }

    render() {
        return (
            <header className="nhsuk-header" role="banner">
                <div className="nhsuk-width-container nhsuk-header__container">
                    <div className="nhsuk-header__logo">
                        <a className="nhsuk-header__link logo custom-logo header-logo" href="/" title="Go to NHS Talent">
                            <img alt="NHS Talent" src="https://assets.nhs.uk/images/nhs-logo.png"/>
                        </a>
                    </div>

                    <div className="nhsuk-header__content" id="content-header">
                        <div className="pull-right">
                        	{!this.state.user &&
	                            <a href={window.portal_sign_up}>
	                                <button className="nhsuk-button nhsuk-button--reverse nhsuk-u-margin-right-4">
	                                    Join now
	                                </button>
	                            </a>
                        	}
                            {this.state.user &&
	                            <a href="/" onClick={this.onClick}>
	                                <button className="nhsuk-button nhs-sign-out-modal">
	                                    Log out
	                                </button>
	                            </a>
                            }
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}