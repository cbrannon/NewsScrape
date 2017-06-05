// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");
// We need to include all of the components we"re utilizing
// Include the Header, Results, and Search components
var Header = require("./components/Main");

ReactDOM.render(<Main />
    , document.getElementById("app")
);