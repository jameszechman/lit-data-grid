import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import {cellBaseStyles} from "./styles.ts";

/**
 * Data Grid Cell
 *
 */
@customElement('data-grid-cell')
export class DataGridCell extends LitElement {
    render() {
        return html`
        <slot></slot>`
    }

    static styles = [cellBaseStyles]
}

declare global {
    interface HTMLElementTagNameMap {
        'data-grid-cell': DataGridCell
    }
}
