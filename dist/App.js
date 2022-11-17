import { useState } from "react"; // prop types

import PropTypes from "prop-types"; // @mui components

import { Box, IconButton, TextField } from "@mui/material"; // @mui icons

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const SitoMUIPasswordTextfield = (props) => {
  const {
    id,
    sx,
    name,
    color,
    label,
    error,
    value,
    iconSx,
    inputSx,
    variant,
    onInput,
    required,
    disabled,
    onChange,
    className,
    onInvalid,
    placeholder,
    onIconClick,
    onMouseDown,
    defaultValue,
  } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [localValue, setLocalValue] = useState("");

  const onLocalChange = (e) => setLocalValue(e.target.value);

  const onLocalIconClick = () => setShowPassword(!showPassword);

  const onLocalMouseDown = (event) => event.preventDefault();

  const parsedInputSx = {
    width: "100%",
    ...inputSx,
  };
  const parsedIconSx = {
    position: "absolute",
    right: "1%",
    top: "50%",
    transform: "translateY(-50%)",
    ...iconSx,
  };
  return /*#__PURE__*/ _jsxs(Box, {
    sx: {
      position: "relative",
      ...sx,
    },
    children: [
      /*#__PURE__*/ _jsx(TextField, {
        id: id,
        name: name,
        error: error,
        label: label,
        color: color,
        variant: variant,
        sx: parsedInputSx,
        disabled: disabled,
        required: required,
        className: className,
        placeholder: placeholder,
        onInput: onInput || null,
        value: value || localValue,
        defaultValue: defaultValue,
        onInvalid: onInvalid || null,
        onChange: onChange || onLocalChange,
        type: showPassword ? "text" : "password",
      }),
      /*#__PURE__*/ _jsx(IconButton, {
        sx: parsedIconSx,
        onClick: onIconClick || onLocalIconClick,
        onMouseDown: onMouseDown || onLocalMouseDown,
        children: showPassword
          ? /*#__PURE__*/ _jsx(VisibilityOff, {})
          : /*#__PURE__*/ _jsx(Visibility, {}),
      }),
    ],
  });
};

SitoMUIPasswordTextfield.defaultProps = {
  id: undefined,
  name: undefined,
  label: undefined,
  color: "primary",
  variant: "outlined",
  className: undefined,
  placeholder: undefined,
  error: false,
  disabled: false,
  onInput: undefined,
  onChange: undefined,
  onInvalid: undefined,
  onIconClick: undefined,
  onMouseDown: undefined,
  value: undefined,
  default: undefined,
  sx: {},
  inputSx: {},
  iconSx: {},
};
SitoMUIPasswordTextfield.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "error",
    "info",
    "success",
    "warning",
    "string",
  ]),
  variant: PropTypes.oneOf(["filled", "outlined", "standard"]),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  onInput: PropTypes.func,
  onChange: PropTypes.func,
  onInvalid: PropTypes.func,
  onIconClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
  inputSx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
  iconSx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};
export default SitoMUIPasswordTextfield;
