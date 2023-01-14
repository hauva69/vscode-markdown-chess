import MarkdownIt = require('markdown-it');
import Token = require('markdown-it/lib/token');
import Renderer = require('markdown-it/lib/renderer');

function markdownItChessRenderer(tokens: Token[], idx : number, options: MarkdownIt.Options, env: any, self: Renderer) {
  console.log(`FUCK2: token ${idx}`);
  return  `<div id="chessboard${idx}" style="width: 500px; height: 500px"></div>\n` +
          `<script type="module">import {Chessground} from "chessground";const board = Chessground(document.getElementById("chessboard${idx}"), {});</script>\n`;
}

export function markdownItChessPlugin(md: MarkdownIt) {
  console.log('FUCK1');

  const proxy = (tokens: Token[], idx : number, options: MarkdownIt.Options, env: any, self: Renderer) => self.renderToken(tokens, idx, options);
  const defaultFenceRenderer = md.renderer.rules.fence || proxy;

  md.renderer.rules.fence = function (tokens: Token[], idx : number, options: MarkdownIt.Options, env: any, self: Renderer) {
    if (tokens[idx].info.toLowerCase() === 'chess') {
      return markdownItChessRenderer(tokens, idx, options, env, self);
    }
    else {
      return defaultFenceRenderer(tokens, idx, options, env, self);
    }
  }
}