import { Game } from "./game.model";
import { Games } from "./games.enum";
import { TicTacToe } from "./tictactoe/tictactoe";
import { BattleShips } from "./battleShips/battleShips";

export class GameFactory {
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
