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

/**
 * Validates that a text meet certain requirements
 *
 * @param {string} value Text to validate
 * @param {object} options Requeriments for text
 * @param {object} errors Errors to be returned in every case that value doesn't meet requirements
 *
 * @returns {string} Error message or null if everything it's okay
 */
module.exports = function textValidations(value, options, errors) {
  if (options.required && (!value || value === '')) {
    return errors.required;
  }

  if (!value || value === '') {
    return null;
  }

  if (value.length < options.minLength) {
    return errors.minLength;
  }

  if (value.length > options.maxLength) {
    return errors.maxLength;
  }

  if (options.pattern && !options.pattern.test(value)) {
    return errors.pattern;
  }

  return null;
};

module.exports.TEXT_PATTERNS = {
  ONLY_LETTERS_PATTERN: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/,
  PASSWORD_PATTERN: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,15})/,
};
