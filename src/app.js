import React from "react";
import ReactDOM from "react-dom";
import jQuery from "jquery";
import Page from "./components/page";

jQuery(function() {
  ReactDOM.render(
    <Page />,
    document.getElementById('react-container')
  );
})
