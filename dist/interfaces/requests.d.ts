export interface NewCardRequest {
    spaceID: string;
    parentCardPathToRoot: string | null;
    name: string;
}
