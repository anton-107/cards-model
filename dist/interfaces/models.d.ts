type SpaceID = string;
type CardID = string;
type ISODate = string;
type UserID = string;
type SortKey = string;
type EntityType = "space" | "card" | "blocktext";
type Integer = number;
type ShortText = string;
type LongText = string;
interface Entity {
  entityType: EntityType;
  createdAt: ISODate;
  updatedAt: ISODate;
  owner: UserID;
}
export interface Space {
  id: SpaceID;
  name: string;
}
export interface Card extends Entity {
  spaceID: SpaceID;
  pathToRoot: SortKey;
  cardID: CardID;
  name: string;
  content: Card[];
}
export interface BlockTextCard extends Card {
  nestedLevel: Integer;
}
export interface CheckboxCard extends BlockTextCard {
  isChecked: boolean;
  label: ShortText;
}
export interface PlaintextCard extends BlockTextCard {
  plaintext: LongText;
}
export interface MarkdownCard extends BlockTextCard {
  markdownText: LongText;
}
export {};
