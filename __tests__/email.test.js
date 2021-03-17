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

const { emailValidation } = require('../index');

describe('Email Validation', () => {
  describe('Required', () => {
    test('Provided and Valid', () => {
      const result = emailValidation('hello@simply-development.com', true, {
        required: 'Is Required',
        pattern: 'Is not Valid',
      });

      expect(result).toBeNull();
    });

    test('Not Provided', () => {
      const result = emailValidation('', true, {
        required: 'Is Required',
        pattern: 'Is not Valid',
      });

      expect(result).toBe('Is Required');
    });
  });

  describe('Not Required', () => {
    const result = emailValidation('', false, {
      required: 'Is Required',
      pattern: 'Is not Valid',
    });

    expect(result).toBeNull();
  });
});
