import { disabled } from "../decorators";
import { Game } from "../game.model";
import {Board} from './Board';
//@disabled
export class TicTacToe implements Game {
    name: string;

    constructor() {
        this.name = "Kółko i rzyżyk"        
    }
    disabled: boolean;
    getGameElement(): HTMLElement {
        var board= new Board(5);
        return board.table;
    }
}