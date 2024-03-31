import {html, LitElement} from 'lit'
import {customElement, property, state} from 'lit/decorators.js'
import {cellBaseStyles, headerBaseStyles, headerResizerStyles} from "./styles.ts";
import {Column, ColumnAlignment} from "./types.ts";
import {consume} from "@lit/context";
import {
    editableContext,
    filterableContext,
    hideableContext,
    resizeContext,
    sortableContext
} from "./context.ts";
import {DataGrid} from "./data-grid.ts";

/**
 * Data Grid Column
 *
 */
@customElement('data-grid-column')
export class DataGridColumn extends LitElement {
    //#region Properties
    /**
     * The alignment of the column
     */
    @property({type: String}) align: ColumnAlignment = 'start';
    /**
     * The description of the column and the data it contains
     */
    @property({type: String}) description?: Column['description'];
    /**
     * The minimum width the column can be resized too
     */
    @property({type: Number}) minWidth?: Column['minWidth'];
    /**
     * The maximum width the column can be resized too
     */
    @property({type: Number}) maxWidth?: Column['maxWidth'];
    //#endregion Properties
    //#region Options
    /**
     * Whether the column is editable
     */
    @consume({context: editableContext})
    @property({type: Boolean}) editable?: Column['editable'] = false;
    /**
     * Whether the column is filterable
     */
    @consume({context: filterableContext})
    @property({type: Boolean}) filterable?: Column['filterable'] = false;
    /**
     * Whether the column is sortable
     */
    @consume({context: sortableContext})
    @property({type: Boolean}) sortable?: Column['sortable'] = false;
    /**
     * Whether the column is hideable
     */
    @consume({context: hideableContext})
    @property({type: Boolean}) hideable?: Column['hideable'] = true;
    /**
     * Whether the column is resizable
     */
    @consume({context: resizeContext})
    @property({type: Boolean}) resizable?: Column['resizable'] = true;
    //#endregion Options
    //#region State
    @state() _resizing = false;

    private get width() {
        if(this.parentElement?.getRootNode() instanceof ShadowRoot && (this.parentElement.getRootNode() as ShadowRoot).host instanceof DataGrid) {
            return (this.parentElement.getRootNode() as ShadowRoot).host.getBoundingClientRect().width;
        } else {
            console.warn('DataGridColumn must be a child of DataGrid');
            return 0;
        }

    }
    private pixelsToPercentOfWidth(pixels: number) {
        return `${(pixels / this.width) * 100}%`
    }
    //#endregion State
    //#region Lifecycle
    firstUpdated() {
        const initialWidth = this.dataset.width || this.getBoundingClientRect().width;
        this.dataset.width = `${this.pixelsToPercentOfWidth(initialWidth as number)}%`;
    }
    //#endregion Lifecycle
    render() {
        return html`
                <slot></slot>
                ${this.resizable ? html`
                    <div class="resize-handle" @pointerdown="${this._onPointerDown}"
                    ></div>` : ''}
        `
    }

    private _onPointerDown = (event: PointerEvent) => {
            this._resizing = true;
            document.addEventListener('pointermove', this._onPointerMove)
            document.addEventListener('pointerup', this._onPointerUp);
    }
    private _onPointerMove = (event: PointerEvent) => {
        event.preventDefault()
        if (this._resizing) {
            this.dataset.width = `${this.pixelsToPercentOfWidth(event.clientX - this.getBoundingClientRect().left)}%`
            // Resize the column
        }
    }

    private _onPointerUp = (event: PointerEvent) => {
        this._resizing = false;
    }

    static styles = [
        cellBaseStyles,
        headerBaseStyles,
        headerResizerStyles
    ]
}

declare global {
    interface HTMLElementTagNameMap {
        'data-grid-column': DataGridColumn
    }
}
