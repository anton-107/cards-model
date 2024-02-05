import { Card } from "./interfaces/models";
import { NewCardRequest } from "./interfaces/requests";
export declare class CardsRepository {
  private cards;
  private idCounter;
  addCard(request: NewCardRequest): Card;
  listAll(): Card[];
  private calculateNewPathToRoot;
}
