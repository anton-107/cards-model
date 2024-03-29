"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsRepository = exports.IDCounter = void 0;
class IDCounter {
    constructor() {
        this.counter = 0;
    }
    next() {
        return String((this.counter += 1));
    }
}
exports.IDCounter = IDCounter;
class CardsRepository {
    constructor(idCounter) {
        this.idCounter = idCounter;
        this.cards = [];
    }
    addCard(request) {
        const cardID = this.idCounter.next();
        const card = {
            spaceID: request.spaceID,
            pathToRoot: this.calculateNewPathToRoot(request.parentCardPathToRoot, cardID),
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
    listAll() {
        return this.cards;
    }
    calculateNewPathToRoot(parentCardPathToRoot, newCardID) {
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
exports.CardsRepository = CardsRepository;
