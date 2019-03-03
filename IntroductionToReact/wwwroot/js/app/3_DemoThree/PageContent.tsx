import * as React from 'react';
import { Form } from './Form';
import { ErrorMessageCallout } from './ErrorMessageCallout';
import { ControlledForm } from './ControlledForm';

//export class PageContent extends React.Component<{}, {}>
//{

//    render() {
//        return (
//            <Form />
//        );
//    }

//}

interface PageContentState {
    error: string;
    title: string;
}

export class PageContent extends React.Component<{}, PageContentState>
{
    constructor(props: {}) {
        super(props);

        this.state = {
            title: "Initial Title",
            error: ""
        }
    }

    setTitle = (newTitle: string) => {
        var newError = "";

        if (newTitle.length < 5) {
            newError = "Title is too short";
        }

        this.setState({
            title: newTitle,
            error: newError
        });
    }

    render() {
        return (
            <div>
                <ErrorMessageCallout error={this.state.error} />
                <ControlledForm title={this.state.title} handleTitleChange={this.setTitle} />
            </div>
        );
    }
}
