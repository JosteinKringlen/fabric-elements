import { FabricWebComponent } from '../utils';
import { card as c } from '@fabric-ds/component-classes';
import { classNames } from '@chbphone55/classnames';

class FabricCard extends FabricWebComponent {
  static get observedAttributes() {
    return ['onlick', 'selected'];
  }

  attributeChangedCallback(name, _, newValue) {
    switch (name) {
      case 'onclick':
        this[name] = new Function('return ' + newValue)();
        break;
      case 'selected':
        this[name] = newValue == 'false' ? false : true;
        break;
      default:
        this[name] = newValue;
    }

    this.id =
      this.id ||
      `card-${
        Date.now().toString(36) + Math.random().toString(36).slice(2, 5)
      }`;
    this.render();
  }

  connectedCallback() {
    this.content = [...this.innerHTML].join('');
    this.as = this.getAttribute('as') || 'div';
    this.selected = this.getAttribute('selected')
      ? this.getAttribute('selected') == 'false'
        ? false
        : true
      : undefined;

    this.id =
      this.id ||
      `card-${
        Date.now().toString(36) + Math.random().toString(36).slice(2, 5)
      }`;

    this.render();
    this.innerHTML = '';
  }

  render() {
    const exists = this.shadowRoot.getElementById(this.id);
    if (exists) exists.remove();

    this.shadowRoot.innerHTML += `
      <${this.as} id="${this.id}" tabindex="0" class="${classNames(
      this.getAttribute('class'),
      {
        'outline-none focus:ring ring-offset-1 ring-aqua-200': true,
        [c.card]: true,
        [c.cardSelected]: this.selected,
        [c.cardOutline]: true,
        [this.selected ? c.cardOutlineSelected : c.cardOutlineUnselected]: true,
        [this.selected ? 'focus:border-blue-500' : '']: true,
      },
    )}">
    
      <style>a::after { content: ""; position: absolute; top: 0; right: 0; bottom: 0; left: 0;  }</style>
  
      ${
        this.onclick
          ? `
          <button class="sr-only" aria-pressed="${this.selected}" tabIndex="-1">
            Velg
          </button>
        `
          : ''
      }
  
      ${
        !this.onclick && this.selected
          ? `
        <span role="checkbox" aria-checked="true" aria-disabled="true" />
        `
          : ''
      }
  
        ${this.content}
      </${this.as}>
      `;

    this.handleSetup();
  }

  handleSetup() {
    const el = this.shadowRoot.getElementById(`${this.id}`);

    if (this.onclick) {
      const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          document
            .getElementById(this.id)
            .setAttribute('selected', !this.selected);
          this.onclick && this.onclick();
          return;
        }
      };
      el.addEventListener('keydown', handleKeyDown);
    }
  }
}

if (!customElements.get('f-card')) {
  customElements.define('f-card', FabricCard);
}

export { FabricCard };
