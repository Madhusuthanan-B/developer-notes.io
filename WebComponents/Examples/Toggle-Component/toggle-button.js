class ToggleButton extends HTMLElement {
    constructor() {
        super();
        this._isHidden = true;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .show {
                    display: block;
                }
                .hide {
                    display: none;
                }
            </style>
            <button>Show</button>
            <p id="info-box" class="hide">
            <slot></slot>
            </p>
        `;
    }

    connectedCallback() {
        if (this.hasAttribute('initial-visibility')) {
            const value = this.getAttribute('initial-visibility');
            if (value === "true") {
                this._isHidden = true;
                this._toggleInfo();
            }
        }
        const button = this.shadowRoot.querySelector('button');
        button.addEventListener('click', this._toggleInfo.bind(this));
    }

    _toggleInfo() {
        this._isHidden = !this._isHidden;
        const info = this.shadowRoot.querySelector('p');
        const button = this.shadowRoot.querySelector('button');
        info.className = this._isHidden ? 'hide' : 'show';
        button.textContent = this._isHidden? 'Show': 'Hide';
    }
}

customElements.define('toggle-button', ToggleButton);
