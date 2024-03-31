import {css} from "lit";
export const cellBaseStyles = css`
    :host {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        display: block;
        border-bottom: 1px solid #e0e0e0;
        position: relative;
        padding: 0.5em;
        text-align: left;
    }
`;

export const headerBaseStyles = css`
    :host {
        background-color: #f0f0f0;
        font-weight: 500;
    }
`;

export const headerResizerStyles = css`
    :host(:hover) .resize-handle {
        background-color: #e0e0e0;
    }
    .resize-handle {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 5px;
        cursor: col-resize;
        background-color: #f0f0f0;
    }
`;
