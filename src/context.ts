import {Context, createContext} from "@lit/context";
import {DataGrid} from "./data-grid.ts";

export const dataGridContext: Context<string, DataGrid> = createContext('data-grid');

//#region OptionContexts
export const editableContext: Context<string, boolean | undefined> = createContext('editable');
export const filterableContext: Context<string, boolean | undefined> = createContext('filterable');
export const sortableContext: Context<string, boolean | undefined> = createContext('sortable');
export const hideableContext: Context<string, boolean | undefined> = createContext('hideable');
export const resizeContext: Context<string, boolean | undefined> = createContext('resize');
export const reorderContext: Context<string, boolean | undefined> = createContext('reorder');

//#endregion OptionContexts
