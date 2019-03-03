import * as React from 'react';
import { HelloWorldMessage } from './HelloWorldMessage';

export class ButtonMessageWidget extends React.Component<{}, {}>
{
    handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        let buttonText = $(e.target).text();
        console.log(buttonText + " button clicked");
    }

    render() {
        return (
            <div>
                <HelloWorldMessage />
                <button type="button" onClick={this.handleClick}>
                    Clicky click
                </button>
            </div>
        );
    }

}
