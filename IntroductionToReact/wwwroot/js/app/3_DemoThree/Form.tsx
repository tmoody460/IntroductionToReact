import * as React from 'react';

interface FormState {
    title: string;
}

export class Form extends React.Component<{}, FormState>
{
    constructor(props: {}) {
        super(props);

        this.state = {
            title: "Initial Title"
        }
    }

    handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            title: e.target.value
        });
    }

    render() {
        return (
            <input value={this.state.title} onChange={this.handleTitleChange}></input>
        );
    }

}
