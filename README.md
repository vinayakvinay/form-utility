# Form Utility

Form Utility is a lightweight plugin for validating form inputs and truthiness.

## Install

Local build integration:
```sh
$ npm install --save-dev form-utility
```

Global command-line interface:
```sh
$ npm install --global form-utility
```

## Usage
### Import the module
```js
import { helperFunctionName } from 'form-utility';
```

```js
import { isValidEmail } from 'form-utility';

var userEmail = 'abc@xyz.com';
if(isValidEmail(userEmail)){
    // Next action
}
```

### Helper methods

`capitalizeName(string)` | return <string>
`isValidEmail(string)` | return <boolean>
`isValidName(string)` | return <boolean>
`isValidPhoneNumber(string)` | return <boolean>
`hasSpecialChar(string)` | return <boolean>

More to come..
