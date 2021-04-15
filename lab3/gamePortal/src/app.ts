import { Games } from "../games.enum";
import { Game } from "../game.model";
import { TicTacToe } from "../tic-tac-toe/src/tictactoe";
import {BattleShips} from '../battleShips/battleShips'
import './styles/styles.scss';

class App {
     gameFactory: GameFactory;

    constructor(gameFactory: GameFactory) {
    this.gameFactory = gameFactory;
    this.init();
    }

    init(): void {
        const menuContainer = <HTMLDivElement>(document.createElement('div')); // kontener menu dostępnych gier
        const gameContainer = <HTMLDivElement>(document.createElement('div')); // kontener główny ekranu z grą
        const list = document.createElement('ul'); // lista pozycji w menu dostępnych gier
        
         for (const gameKind of Object.keys(Games)) {
      if (isNaN(Number(gameKind))) {
        continue;
      }
      const game = this.gameFactory.getGame(Number(gameKind));
      const item = document.createElement("li");
      item.appendChild(document.createTextNode(game.name));
      item.addEventListener("click", () => {
        gameContainer.innerHTML = "";
        gameContainer.appendChild(game.getGameElement());
      });
      list.appendChild(item);
    }
        // TODO: Zaimplementuj wzorzec fabryki/metody fabrykującej, tak aby na podstawie konkretnej wartości z enum
        // zwrócić obiekt gry. Z tego obiektu można następnie pobrać nazwę gry i dodać do menu oraz metodę zwracającą
        // samą grę i po kliknięciu w wybrany element listy wywoływać ją, aby doklejać zawartość do gameContainer.
        // Aby wyświetlić menu należy napisać pętlę, któta przeiteruje po wszystkich wartościach enum'a

        menuContainer.appendChild(list);
        document.body.appendChild(menuContainer);
        document.body.appendChild(gameContainer);
    }
}
class GameFactory {
  getGame(game: Games): Game {
    switch (game) {
      case Games.TicTacToe:
        return new TicTacToe();
      case Games.BattleShips:
        return new BattleShips();
      default:
        throw new Error("Invalid game!");
    }
  }
}

new App( new GameFactory() );