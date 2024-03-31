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
            display: contents;
        }
    `
}

declare global {
    interface HTMLElementTagNameMap {
        'data-grid-row': DataGridRow
    }
}
