
import { Game } from "../game.model";
import {Board} from './Board';

export class TicTacToe implements Game {
    name: string;

    constructor() {
        this.name = "Kółko i krzyżyk";
    }
    getGameElement(): HTMLElement {
        var board= new Board(3);
        return board.table;
    }
}