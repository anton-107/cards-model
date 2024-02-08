import { Card } from "./interfaces/models";
import { NewCardRequest } from "./interfaces/requests";
interface Counter {
    next(): string;
}
export declare class IDCounter implements Counter {
    private counter;
    next(): string;
}
export declare class CardsRepository {
    private idCounter;
    private cards;
    constructor(idCounter: Counter);
    addCard(request: NewCardRequest): Card;
    listAll(): Card[];
    private calculateNewPathToRoot;
}
export {};
