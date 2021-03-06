import { scenarioParts } from '../../scenarioParts';

export function background(boardModel: number[][]): number[][] {
    return boardModel.map(column => column.map(() => scenarioParts.BACKGROUND));
}
