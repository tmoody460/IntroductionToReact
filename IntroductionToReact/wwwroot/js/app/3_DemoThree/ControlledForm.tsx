import * as React from 'react';

interface ControlledFormProps{
    title: string;
    handleTitleChange(value: string): void;
}

export class ControlledForm extends React.Component<ControlledFormProps, {}>
{
    handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.handleTitleChange(e.target.value);
    }

    render() {
        return (
            <input value={this.props.title} onChange={this.handleTitleChange}></input>
        );
    }

}
