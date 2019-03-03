import * as React from 'react';

interface CounterProps {
    incrementBy: number;
}

interface CounterState {
    value: number;
}

export class Counter extends React.Component<CounterProps, CounterState>
{
    constructor(props: CounterProps) {
        super(props);

        this.state = {
            value: 0
        };
    }

    increment = () => {
        let newValue = this.state.value + this.props.incrementBy;

        this.setState({
            value: newValue
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.value}</h1>
                <button onClick={this.increment}>
                    Increment by {this.props.incrementBy}
                </button>
            </div>
        );
    }

}
