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

const textValidations = require('./src/text');
const emailValidation = require('./src/email');
const phoneValidation = require('./src/phone');

module.exports.textValidations = textValidations;
module.exports.TEXT_PATERNS = textValidations.TEXT_PATTERNS;
module.exports.emailValidation = emailValidation;
module.exports.phoneValidation = phoneValidation;
