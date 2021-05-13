
import { Game } from "../game.model";
import {Board} from './Board';

export class TicTacToe implements Game {
    name: string;

    constructor() {
        this.name = "Kółko i krzyżyk";
    }
    getGameElement(): HTMLElement {
        const board = new Board(4);
        console.log(board.table);
        return <HTMLElement>board.table;
    }
}