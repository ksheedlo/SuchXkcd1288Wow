/** @license
 * Such XKCD 1288 Wow
 * many news very excite
 * Copyright (c) 2013 Ken Sheedlo. http://kensheedlo.com
 *
 * Made with love in Colorado by @kensheedlo
 *
 * The MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
(function (window, document) {
  'use strict';
  var doSubstitutionR;

  function walkDOM(func, node) {
    func(node);
    node = node.firstChild;
    while (node) {
      walkDOM(func, node);
      node = node.nextSibling;
    }
  }

  function doSubstitution(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent = node.textContent
        .replace(/witnesses/gi, 'these dudes I know')
        .replace(/allegedly/gi, 'kinda probably')
        .replace(/new study/gi, 'Tumblr post')
        .replace(/rebuild/gi, 'avenge')
        .replace(/space/gi, 'spaaace')
        .replace(/google glass/gi, 'Virtual Boy')
        .replace(/smartphone/gi, 'Pokédex')
        .replace(/electric/gi, 'atomic')
        .replace(/senator/gi, 'elf-lord')
        .replace(/car/gi, 'cat')
        .replace(/election/gi, 'eating contest')
        .replace(/congressional leaders/gi, 'river spirits')
        .replace(/homeland security/gi, 'Homestar Runner')
        .replace(/could not be reached for comment/gi, 'is guilty and everyone knows it')
        .replace(/keyboard/gi, 'leopard');
    }
  }
  
  doSubstitutionR = walkDOM.bind(null, doSubstitution);

  function handleChanges(summaries) {
    summaries[0].added.forEach(doSubstitutionR);
    summaries[0].characterDataChanged.forEach(doSubstitutionR);
  }
  
  doSubstitutionR(document.body);
  
  new window.MutationSummary({
    callback: handleChanges,
    rootNode: document.body,
    queries: [{ all: true }]
  });
})(window, document);

