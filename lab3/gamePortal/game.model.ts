export interface Game {
    disabled: boolean;
    name: string;
    getGameElement(): HTMLElement;
}