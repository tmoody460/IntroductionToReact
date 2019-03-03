import * as React from 'react';

interface ErrorMessageCalloutProps {
    error: string
}

export class ErrorMessageCallout extends React.Component<ErrorMessageCalloutProps, {}>
{

    render() {
        return (
            <p>{this.props.error}</p>
        );
    }

}
