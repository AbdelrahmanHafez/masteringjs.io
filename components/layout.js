'use strict';

const nav = require('./nav');

module.exports = params => `
<html>
  <head>
    <title>${params.title} - Mastering JS</title>

    <meta property="og:title" content="${params.title}" />
    <meta property="og:site_name" content="Mastering JS" />
    <meta property="og:description" content="${params.description}" />
    <meta property="og:type" content="article" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0001, minimum-scale=1.0001, maximum-scale=1.0001, user-scalable=no">

    <link rel="stylesheet" href="/assets/style.css" />
    <link rel="stylesheet" href="/assets/github.css" />
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Inconsolata:400,700" rel="stylesheet">
  </head>
  <body>
    <div class="allwrapper">
      ${nav()}
      <div class="content">
        <h1>${params.title}</h1>
        <div class="date">
          ${params.date ? params.date.format('ll') : ''}
        </div>
        ${params.content}
      </div>
    </div>
  </body>
</html>
`;