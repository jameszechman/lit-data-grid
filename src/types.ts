
export type ColumnAlignment = 'start' | 'center' | 'end';

export interface Row {
    [key: string]: any;
}
export interface Column {
    align?: ColumnAlignment;
    description?: string; // A description of the column
    field: string; // The key to use to access the data in the row
    label: string; // The label to display in the header
    width?: number; // The starting width of the column
    minWidth?: number; // The minimum width of the column
    maxWidth?: number; // The maximum width of the column
    editable?: boolean; // Whether the column is editable, defaults to false
    filterable?: boolean; // Whether the column is filterable, defaults to false
    sortable?: boolean; // Whether the column is sortable, defaults to false
    hideable?: boolean; // Whether the column is hideable, defaults to true
    resizable?: boolean; // Whether the column is resizable, defaults to true
    render?: (row: Row) => string; // A function to render the cell
}
