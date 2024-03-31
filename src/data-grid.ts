import {css, html, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import "./data-grid-column.ts";
import "./data-grid-row.ts";
import "./data-grid-cell.ts";
import {Column, Row} from "./types.ts";
import {styleMap} from "lit/directives/style-map.js";
import {provide} from "@lit/context";
import {
    editableContext,
    filterableContext,
    hideableContext,
    hostWidthContext,
    resizeContext,
    sortableContext
} from "./context.ts";

/**
 * Data Grid
 *
 * @slot - This element has a slot
 */
@customElement('data-grid')
export class DataGrid extends LitElement {
    //#region Properties
    /**
     * The columns of the data grid
     */
    @property({type: Array}) columns: Column[] = [];
    /**
     * The rows of the data grid
     */
    @property({type: Array}) rows: Row[] = [];
    //#endregion Properties
    //#region Options
    /**
     * Whether the grid is editable
     */
    @provide({context: editableContext})
    @property({type: Boolean}) editable? = false;
    /**
     * Whether the grid is filterable
     */
    @provide({context: filterableContext})
    @property({type: Boolean}) filterable? = false;
    /**
     * Whether the grid is sortable
     */
    @provide({context: sortableContext})
    @property({type: Boolean}) sortable? = false;
    /**
     * Whether the grid is hideable
     */
    @provide({context: hideableContext})
    @property({type: Boolean}) hideable? = true;
    /**
     * Whether the grid is resizable
     */
    @provide({context: resizeContext})
    @property({type: Boolean}) resizable? = true;

    //#endregion Options
    //#region States
    //#endregion States
    //#region Lifecycle
    override firstUpdated() {

    }
    //#endregion Lifecycle
    render() {
        return html`
            <div class="grid" style=${styleMap({
                gridTemplateColumns: this.columns.map(column => column.width ? `${column.width}px` : 'auto').join(' ')
            })}>
                <div class="head">
                    <data-grid-row>
                        ${this.columns.map(column => html`
                            <data-grid-column>${column.label}</data-grid-column>
                        `)}
                    </data-grid-row>
                </div>
                <div class="body">
                ${this.rows.map(row => html`
                    <data-grid-row>
                        ${this.columns.map(column => html`
                            <data-grid-cell>${column.render ? column.render(row) : row[column.field]}</data-grid-cell>
                        `)}
                    </data-grid-row>
                `)}
                </div>
            </div>
        `
    }

    static styles = css`
        .grid {
            display: grid;
        }

        .head, .body {
            display: contents;
            grid-column: 1/-1;
        }
    `
}

declare global {
    interface HTMLElementTagNameMap {
        'data-grid': DataGrid
    }
}
