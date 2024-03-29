import { Card } from "./interfaces/models";
import { NewCardRequest } from "./interfaces/requests";

interface Counter {
  next(): string;
}

export class IDCounter implements Counter {
  private counter = 0;
  public next(): string {
    return String((this.counter += 1));
  }
}

export class CardsRepository {
  private cards: Card[] = [];

  constructor(private idCounter: Counter) {}

  public addCard(request: NewCardRequest): Card {
    const cardID = this.idCounter.next();
    const card: Card = {
      spaceID: request.spaceID,
      pathToRoot: this.calculateNewPathToRoot(
        request.parentCardPathToRoot,
        cardID,
      ),
      cardID,
      name: request.name,
      content: [],
      entityType: "card",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      owner: "user-1",
    };
    this.cards.push(card);
    return card;
  }

  public listAll(): Card[] {
    return this.cards;
  }

  private calculateNewPathToRoot(
    parentCardPathToRoot: string | null,
    newCardID: string,
  ): string {
    if (parentCardPathToRoot === null) {
      return `L_CARD${newCardID}`;
    }
    // strip starting L_:
    let r = parentCardPathToRoot.replace(/^L_/, "");

    // strip L_ in the middle:
    r = r.replace(/L_/, "");
    return `${r}_L_CARD${newCardID}`;
  }
}
