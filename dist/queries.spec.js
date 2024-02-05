"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queries_1 = require("./queries");
describe("Adding nesting cards", () => {
  const repository = new queries_1.CardsRepository();
  it("should create cards on the root level", () => {
    repository.addCard({
      spaceID: "space-1",
      parentCardPathToRoot: null,
      name: "Card 1",
    });
    repository.addCard({
      spaceID: "space-1",
      parentCardPathToRoot: null,
      name: "Card 2",
    });
    repository.addCard({
      spaceID: "space-1",
      parentCardPathToRoot: null,
      name: "Card 3",
    });
    const allCards = repository.listAll();
    expect(allCards[0].pathToRoot).toBe("L_CARD1");
    expect(allCards[1].pathToRoot).toBe("L_CARD2");
    expect(allCards[2].pathToRoot).toBe("L_CARD3");
  });
  it("should create nested cards to one of the cards", () => {
    let allCards = repository.listAll();
    let parentCard = allCards[1];
    repository.addCard({
      spaceID: parentCard.spaceID,
      parentCardPathToRoot: parentCard.pathToRoot,
      name: "Card 2-1",
    });
    allCards = repository.listAll();
    expect(allCards[3].pathToRoot).toBe("CARD2_L_CARD4");
    parentCard = allCards[3];
    repository.addCard({
      spaceID: parentCard.spaceID,
      parentCardPathToRoot: parentCard.pathToRoot,
      name: "Card 2-1-1",
    });
    allCards = repository.listAll();
    expect(allCards[4].pathToRoot).toBe("CARD2_CARD4_L_CARD5");
  });
});
