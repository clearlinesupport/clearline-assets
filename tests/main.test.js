const { JSDOM } = require('jsdom');
const { initSite } = require('../site/main');

describe('initSite', () => {
  let dom;
  beforeEach(() => {
    dom = new JSDOM(`
      <input type="checkbox" id="menu-toggle">
      <nav id="main-nav"><a href="#"></a></nav>
      <form id="contact-form"></form>
    `, { url: 'http://localhost' });
    global.window = dom.window;
    global.document = dom.window.document;
  });

  afterEach(() => {
    dom.window.close();
    delete global.window;
    delete global.document;
  });

  it('updates aria-expanded on toggle change', () => {
    initSite();
    const toggle = document.getElementById('menu-toggle');
    toggle.checked = true;
    toggle.dispatchEvent(new dom.window.Event('change'));
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
  });

  it('closes menu when nav link clicked', () => {
    initSite();
    const toggle = document.getElementById('menu-toggle');
    toggle.checked = true;
    const link = document.querySelector('#main-nav a');
    link.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }));
    expect(toggle.checked).toBe(false);
  });
});
