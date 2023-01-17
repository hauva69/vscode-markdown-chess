# vscode-markdown-chess 

Adds support to displaying chess boards in vscode builtin markdown preview. 

## Features

Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.
>
> TODO: add GIF

## Usage

Create an empty chess board by writing a chess code block:

~~~markdown
```chess
```
~~~

Note that on an empty board you can move pieces and draw arrows/squares and copy it back to the chess code block, as shown in the GIF.

You can supply an initial FEN, and arrows/squares to mark on the board, and a board size:

~~~markdown
```chess
fen: r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1
arrows: f3->e5 b5->c6
squares: g5 f7
size: 35%
```
~~~ 

Full list of supported properties:

| Property    | Description                              | Possible values        | Default                          |
| --------    | ---------------------------------------- | ---------------------- | -------------------------------- |
| fen         | The initial position                     | Any valid FEN string   | Initial                          |
| arrows      | Series of arrows to draw                 | e2->e4 d2->d4          | Empty                            |
| squares     | Series of squares to mark                | e5 d5                  | Empty                            |
| orientation | Which side to view the board             | white / black          | white                            | 
| size        | % of the page width to use for the board | 20% - 80%              | 50%                              |
| movable     | Force to enable/disable movement         | true / false           | false if FEN supplied            |
| drawable    | Force to enable/disable drawing          | true / false           | false if arrows/swaures supplied |
| lastMove    | Highlight last move                      | e2 e4                  | Undefined                        |

## License

This project is based on the [Chessground](https://github.com/lichess-org/chessground) library by lichess in order to render chess board, so I had to use the GPL-3.0 license for this project too.

## TODO

- [ ] Add a copy button from the info element
- [ ] Make files and columns text unselectable
- [ ] Allow only legal moves when movable
- [ ] Show check automatically
- [ ] Add multiple piece sets

## Known Issues

## Contributing

`vscode-markdown-chess` is developed on GitHub at [eronne/vscode-mardown-chess](https://github.com/eronnen/vscode-markdown-chess). Feel free to add PRs, issues and feature request on the [issues](https://github.com/eronnen/vscode-markdown-chess/issues) page.

---

