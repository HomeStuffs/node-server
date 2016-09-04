var React = require('react');
var ReactDOM = require('react-dom');

global.jQuery = require('../../libraries/jquery/dist/jquery');
var bootstrap = require('../../libraries/bootstrap-sass/assets/javascripts/bootstrap');
var $ = jQuery;

var Main = require('../../../components/Main.jsx');

ReactDOM.render(
  <Main />,
  document.getElementById('main-component')
);
