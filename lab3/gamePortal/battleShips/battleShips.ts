import { Game } from "../game.model";
import {disabled} from "../decorators"

@disabled
export class BattleShips implements Game {
    name: string;

    constructor() {
        this.name = "Statki"       
    }
    disabled: boolean;
    getGameElement(): HTMLElement {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode("Hello BattleShips"));
        return div;
    }

}