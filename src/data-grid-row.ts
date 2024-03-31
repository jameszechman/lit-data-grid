import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

/**
 * Data Grid Row
 *
 */
@customElement('data-grid-row')
export class DataGridRow extends LitElement {
    render() {
        return html`
        <slot></slot>`
    }

    static styles = css`
        :host {
            display: grid;
            box-sizing: border-box;
            grid-template-columns: subgrid;
            grid-column: 1/-1;
        }
    `
}

declare global {
    interface HTMLElementTagNameMap {
        'data-grid-row': DataGridRow
    }
}
