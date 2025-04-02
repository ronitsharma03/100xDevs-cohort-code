import { describe, expect, test } from '@jest/globals';
import { sum } from '../index';

describe('sum module', () => {
    test('Adds 1 + 2 to equals 3', () => {
        expect(sum(1, 2)).toBe(3);
    })
})