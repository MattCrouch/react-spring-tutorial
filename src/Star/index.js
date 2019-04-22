import React, { Component } from "react";

import "./styles.css";

export class Star extends Component {
  render() {
    return (
      <svg
        className="Star"
        style={this.props.style}
        onClick={this.props.onClick}
        onMouseEnter={this.props.onMouseEnter}
        width="102px"
        height="96px"
        viewBox="0 0 102 96"
        version="1.1"
      >
        <g
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          strokeLinejoin="round"
        >
          <polygon
            id="Star"
            stroke="#FFFFFF"
            strokeWidth="5"
            fill={this.props.active ? "#F9BE3E" : "#FFFFFF"}
            points="51 83.1013765 21.6107374 93.4508497 22.3718897 62.3018369 3.44717419 37.5491503 33.3068548 28.6474749 51 3 68.6931452 28.6474749 98.5528258 37.5491503 79.6281103 62.3018369 80.3892626 93.4508497"
          />
        </g>
      </svg>
    );
  }
}

export default Star;
