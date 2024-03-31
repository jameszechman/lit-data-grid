import {Context, createContext} from "@lit/context";

//#region OptionContexts

export const editableContext: Context<string, boolean | undefined> = createContext('editable');
export const filterableContext: Context<string, boolean | undefined> = createContext('filterable');
export const sortableContext: Context<string, boolean | undefined> = createContext('sortable');
export const hideableContext: Context<string, boolean | undefined> = createContext('hideable');
export const resizeContext: Context<string, boolean | undefined> = createContext('resize');

//#endregion OptionContexts
