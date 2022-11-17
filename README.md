# Sito MUI PasswordTextfield

Password text field with icon to show/hide password text

### How to use it?

```
import { useState } from "react";
import SitoMUIPasswordTextfield from "sito-mui-password-textfield";

const [password, setPassword] = useState("");

const handlePassword = (e) => setPassword(e.target.value);

function App() {
    return {
        <SitoMUIPasswordTextfield
            value={password}
            onChange={handlePassword}
        />
    }
}

```

You can change the name of the tab view, if you don't like its name 😂

```
import { useState } from "react";
import PasswordField from "sito-mui-password-textfield";

const [password, setPassword] = useState("");

const handlePassword = (e) => setPassword(e.target.value);

function App() {
    return {
        <PasswordField
            value={password}
            onChange={handlePassword}
        />
    }
}

```

You can add your css rules, like `sx` prop for [styled-component](https://emotion.sh/docs/introduction), `style` prop like inline css styles and classNames from your css files

```
import { useState } from "react";
import SitoMUIPasswordTextfield from "sito-mui-password-textfield";

const [password, setPassword] = useState("");

const handlePassword = (e) => setPassword(e.target.value);

function App() {
    return {
        <SitoMUIPasswordTextfield
            sx={{ width:"305px" }}
            value={password}
            onChange={handlePassword}
        />
    }
}

```

## Props

| Name         | Type                                                                      | Default   | Description                                                                                                    |
| ------------ | ------------------------------------------------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------- |
| id           | string                                                                    |           | html identifier                                                                                                |
| name         | string                                                                    |           | html name                                                                                                      |
| className    | string                                                                    |           | css class name                                                                                                 |
| label        | string                                                                    |           | input label                                                                                                    |
| color        | one of 'primary' 'secondary' 'error' 'info' 'success' 'warning' or string | "primary" | color for the indicator                                                                                        |
| variant      | one of 'filled' 'outlined' or 'standard'                                  |           | css class name                                                                                                 |
| placeholder  | string                                                                    |           | input placeholder                                                                                              |
| disabled     | boolean                                                                   | false     | If true, the component is disabled.                                                                            |
| error        | boolean                                                                   | false     | If true, the label is displayed in an error state.                                                             |
| onInput      | func (event)                                                              |           | function to reset form state                                                                                   |
| onChange     | func (event)                                                              |           | function to capture the main value                                                                             |
| onInvalid    | func (event)                                                              |           | function to throw when the value is invalid                                                                    |
| onIconClick  | func (event)                                                              |           | function to capture the icon button action                                                                     |
| value        | one of string or number                                                   |           | The value of the input element, required for a controlled component.                                           |
| defaultValue | one of string or number                                                   |           | The default value. Use when the component is not controlled.                                                   |
| sx           | Array<func<br>\| object<br><br>\| bool><br><br>\| func<br><br>\| object   |           | The system prop that allows defining system overrides as well as additional CSS styles.                        |
| inputSx      | Array<func<br>\| object<br><br>\| bool><br><br>\| func<br><br>\| object   |           | The system prop that allows defining system overrides as well as additional CSS styles of the input TextField. |
| iconSx       | Array<func<br>\| object<br><br>\| bool><br><br>\| func<br><br>\| object   |           | The system prop that allows defining system overrides as well as additional CSS styles of the icon button.     |
|              |

🙌 Good luck out there my friend 🙌
