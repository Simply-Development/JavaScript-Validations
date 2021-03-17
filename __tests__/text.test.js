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

const { textValidations, TEXT_PATERNS } = require('../index');

describe('Text requirement', () => {
  describe('Required', () => {
    test('Provided', () => {
      const result = textValidations('Provided', {
        required: true,
        minLength: 1,
        maxLength: 15,
      }, {
        required: 'Is required',
        minLength: 'At least 1 character',
        maxLength: 'Maximum 15 characters',
      });

      expect(result).toBeNull();
    });

    describe('Not Provided', () => {
      const result = textValidations('', {
        required: true,
        minLength: 1,
        maxLength: 15,
      }, {
        required: 'Is required',
        minLength: 'At least 1 character',
        maxLength: 'Maximum 15 characters',
      });

      test('Return error message', () => {
        expect(typeof result).toBe('string');
      });

      test('Return correct error', () => {
        expect(result).toBe('Is required');
      });
    });
  });

  test('Not Required', () => {
    const result = textValidations('', {
      required: false,
      minLength: 1,
      maxLength: 15,
    }, {
      required: 'Is required',
      minLength: 'At least 1 character',
      maxLength: 'Maximum 15 characters',
    });

    expect(result).toBeNull();
  });
});

describe('Text Length', () => {
  describe('Minimum Length', () => {
    test('Length Meeted', () => {
      const result = textValidations('Hello', {
        required: true,
        minLength: 5,
        maxLength: 15,
      }, {
        required: 'Is required',
        minLength: 'At least 1 character',
        maxLength: 'Maximum 15 characters',
      });

      expect(result).toBeNull();
    });

    describe('Wrong Length', () => {
      const result = textValidations('Bad', {
        required: true,
        minLength: 5,
        maxLength: 15,
      }, {
        required: 'Is required',
        minLength: 'At least 5 character',
        maxLength: 'Maximum 15 characters',
      });

      test('Return Error', () => {
        expect(typeof result).toBe('string');
      });

      test('Return correct error message', () => {
        expect(result).toBe('At least 5 character');
      });
    });
  });

  describe('Maximum Length', () => {
    test('Length Meeted', () => {
      const result = textValidations('Okay', {
        required: true,
        minLength: 2,
        maxLength: 5,
      }, {
        required: 'Is required',
        minLength: 'At least 1 character',
        maxLength: 'Maximum 5 characters',
      });

      expect(result).toBeNull();
    });

    describe('Wrong Length', () => {
      const result = textValidations('Not Okay', {
        required: true,
        minLength: 5,
        maxLength: 5,
      }, {
        required: 'Is required',
        minLength: 'At least 1 character',
        maxLength: 'Maximum 5 characters',
      });

      test('Returns Error', () => {
        expect(typeof result).toBe('string');
      });

      test('Returns correct error message', () => {
        expect(result).toBe('Maximum 5 characters');
      });
    });
  });
});

describe('Text Format', () => {
  test('Format Meeted', () => {
    const result = textValidations('Hello', {
      required: true,
      minLength: 5,
      maxLength: 15,
      pattern: TEXT_PATERNS.ONLY_LETTERS_PATTERN,
    }, {
      required: 'Is required',
      minLength: 'At least 1 character',
      maxLength: 'Maximum 15 characters',
      pattern: 'Only Letters',
    });

    expect(result).toBeNull();
  });

  describe('Wrong Format', () => {
    const result = textValidations('32tje', {
      required: true,
      minLength: 5,
      maxLength: 15,
      pattern: TEXT_PATERNS.ONLY_LETTERS_PATTERN,
    }, {
      required: 'Is required',
      minLength: 'At least 1 character',
      maxLength: 'Maximum 15 characters',
      pattern: 'Only Letters',
    });

    test('Return error', () => {
      expect(typeof result).toBe('string');
    });

    test('Return correct error message', () => {
      expect(result).toBe('Only Letters');
    });
  });
});
