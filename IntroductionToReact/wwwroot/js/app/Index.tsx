import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HelloWorldMessage } from './1_DemoOne/HelloWorldMessage';
import { Header } from './2_DemoTwo/Header';
import { ButtonMessageWidget } from './1_DemoOne/ButtonMessageWidget';
import { Counter } from './2_DemoTwo/Counter';
import { PageContent } from './3_DemoThree/PageContent';

$(document).ready(() => {

    // Simplest possible example. Render a simple react element.
    //ReactDOM.render(
    //    <h1>Hello, Demo One</h1>,
    //    document.getElementById("demo")
    //);

    //// Render a simple component
    //ReactDOM.render(
    //    <HelloWorldMessage />,
    //    document.getElementById("demo")
    //);

    //// Render a nested component with a click handler
    //ReactDOM.render(
    //    <ButtonMessageWidget />,
    //    document.getElementById("demo")
    //);

    //// Render a component with props passed in
    //ReactDOM.render(
    //    <Counter incrementBy={2} />,
    //    document.getElementById("demo")
    //);

    // Demonstrate Controlled Components
    ReactDOM.render(
        <PageContent />,
        document.getElementById("demo")
    );

});