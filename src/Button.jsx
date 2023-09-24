import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
  };

  static defaultProps = {
    onClick: () => {},
    type: "button",
  };

  render() {
    const { children, className, onClick, type } = this.props;

    const baseClass = "h-10 rounded border-2 border-solid";
    const mergeClass = `${baseClass} ${className}`;
    return (
      <button onClick={onClick} type={type} className={mergeClass}>
        {children}
      </button>
    );
  }
}

export default Button;
