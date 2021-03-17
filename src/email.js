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

const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
* Validates that a text is a valid email address
*
* @param {string} value Text to be validated as email
* @param {boolean} required To allow null or empty value as valid
* @param {object} errors Errors to be returned in every case that value doesn't meet requirements
*
* @returns {string} Error message or null if everything it's okay
*/
module.exports = function emailValidation(value, required, errors) {
  if (required && (!value || value === '')) {
    return errors.required;
  }

  if (!value || value === '') {
    return null;
  }

  if (!EMAIL_PATTERN.test(value)) {
    return errors.pattern;
  }

  return null;
};
