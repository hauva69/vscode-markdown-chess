import * as fs from 'fs';
import * as path from 'path';
import fetch from 'node-fetch';
import { optimize } from 'svgo';

const lilaBoardsDir = "https://raw.githubusercontent.com/lichess-org/lila/master/public/images/board/svg/";
const localBoardsDir = path.join('..', 'src', 'css', 'chessboard', 'assets', 'boards');
const availableSvgBoards = ["blue", "brown", "green", "ic", "purple"];

async function fetchAllBoards() {
  for (const boardName of availableSvgBoards) {
    const response = await fetch(`${lilaBoardsDir}${boardName}.svg`);
    const svgData = await response.text();

    const svgDataOptimized = optimize(svgData);
    fs.writeFile(path.join(localBoardsDir, `${boardName}.svg`), svgDataOptimized.data, 'utf-8', (err) => {
      if (err) console.error(`got error while writing board ${boardName}: ${err}`);
    });
  }
}

fetchAllBoards();
console.log('finished fetching boards');