/**
 * Copyright 2021 Simply Development
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const parsePhoneNumber = require('libphonenumber-js');

/**
* Validates that a text is a valid phone number
*
* @param {string} value Text to be validated as phone number
* @param {boolean} required To allow null or empty value as valid
* @param {object} errors Errors to be returned in every case that value doesn't meet requirements
*
* @returns {string} Error message or null if everything it's okay
*/
module.exports = function phoneValidation(value, required, errors) {
  if (required && (!value || value === '' || value.length === 3)) {
    return errors.required;
  }

  if (!value || value === '' || value.length === 3) {
    return null;
  }

  try {
    const phone = parsePhoneNumber(value);
    if (!phone.isValid()) {
      return errors.pattern;
    }
  } catch {
    return errors.pattern;
  }

  return null;
};
