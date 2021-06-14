import { Games } from "../games.enum";
import { Game } from "../game.model";
import { TicTacToe } from "../tictactoe/tictactoe";
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
        const gameContainer = <HTMLDivElement>(document.createElement('div'));
        const mainContainer = <HTMLDivElement>(document.createElement('div'));
        const title = <HTMLDivElement>(document.createElement('h1'));// kontener główny ekranu z grą
        gameContainer.classList.add('game_container'); 
        menuContainer.classList.add('menu_container'); 
        mainContainer.classList.add('main_container'); 
        title.classList.add('title');
        title.textContent = 'Game Portal'
        const gamesWrapper = document.createElement('div'); // lista pozycji w menu dostępnych gier
        
         for (const gameKind of Object.keys(Games)) {
      if (isNaN(Number(gameKind))) {
        continue;
      }
      const game = this.gameFactory.getGame(Number(gameKind));
      const item = document.createElement("div");
      item.appendChild(document.createTextNode(game.name));
      item.classList.add('item');
      item.addEventListener("click", () => {
        gameContainer.appendChild(game.getGameElement());
        
      });
      gamesWrapper.appendChild(item);
    }
        // TODO: Zaimplementuj wzorzec fabryki/metody fabrykującej, tak aby na podstawie konkretnej wartości z enum
        // zwrócić obiekt gry. Z tego obiektu można następnie pobrać nazwę gry i dodać do menu oraz metodę zwracającą
        // samą grę i po kliknięciu w wybrany element listy wywoływać ją, aby doklejać zawartość do gameContainer.
        // Aby wyświetlić menu należy napisać pętlę, któta przeiteruje po wszystkich wartościach enum'a
        const switcher= <HTMLButtonElement>document.createElement("button");
        switcher.textContent = 'Pink Mode Switcher';
        switcher.classList.add('button');
        switcher.addEventListener("click", () => document.body.classList.toggle("green_mode"));
        menuContainer.appendChild(gamesWrapper);
        mainContainer.appendChild(menuContainer)
        mainContainer.appendChild(gameContainer);
        document.body.append(title, switcher);
        document.body.appendChild(mainContainer);

        

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