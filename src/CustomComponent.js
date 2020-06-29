import React from 'react';
import logo from './logo.svg';
import './App.css';

class CustomComponent extends React.Component {
  constructor(props) {
    super(props);
    this.routeParam = props.match.params.parameterToAccess;
  }
}
export default CustomComponent;
