'use strict';

const track = require('./track');

module.exports = () => `
<div class="nav">
  <div class="branding">
    <div class="logo">
      <img src="/assets/logo.png">
    </div>
    <div class="name">
      <a href="/">Mastering JS</a>
    </div>
    <div class="links">
      <a href="/all">Tutorials</a>
      <a href="https://www.getrevue.co/profile/masteringjs">Newsletter</a>
    </div>
    <div style="clear: both"></div>
    ${track()}
  </div>
</div>
`;