// IMPORT OUR DEPENDENCIES
import React from "react";
import ReactDOM from "react-dom";


// The Layout component accesses the 'child' JSX through the props.children value. This is a preset value.
const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.children}
            <p>footer</p>
        </div>
    );
};

const template = (
    <div>
        <h1>Page title</h1>
        <p>This is some JSX</p>
    </div>
)


// The children JSX is passed between the opening and closing tags.
ReactDOM.render(
    <Layout>
    {template}
    </Layout>
,document.getElementById("app"));