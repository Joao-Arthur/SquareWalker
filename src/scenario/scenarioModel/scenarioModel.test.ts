import { describe, it, expect } from 'vitest';
import { scenarioModel } from './scenarioModel';
import { scenarioParts } from '../scenarioParts';

describe('scenarioModel', () => {
    it('should generate model', () => {
        expect(scenarioModel.getModel({ width: 5, height: 4 })).toEqual([
            [
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
            ],
            [
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
            ],
            [
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
            ],
            [
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
            ],
            [
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
            ],
        ]);

        expect(scenarioModel.getModel({ width: 10, height: 3 })).toEqual([
            [
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
            ],
            [
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
            ],
            [
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
            ],
            [
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
            ],
            [
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
            ],
            [
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
            ],
            [
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
            ],
            [
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
            ],
            [
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
            ],
            [
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
                scenarioParts.TERRAIN,
            ],
        ]);
    });
});
