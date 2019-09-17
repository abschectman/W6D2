class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers($el);
    this.clickTower($el);
  }

  setupTowers(el) {
    for (let i = 0; i < 3; i++) {
      let $ul = $("<ul>");
      $ul.attr("id", `t${i}`);
      el.append($ul);
    }
    let $firsttower  = $("ul#t0");
    for (let i = 0; i < 3; i++) {
      let $li = $("<li>");
      $li.attr("id", `p${i}`);
      $firsttower.append($li);
    }
  }

  render(game) {
    
  }

  clickTower(el) {
    let $piles = $("ul")
    let pos;
    let $currentPile;
    $piles.on("click", (e) => {
      if (pos) {
       let $newPile = $(e.target);
       this.makeMove($currentPile, $newPile);
      }
      $currentPile = $(e.target);
      pos = $currentPile.attr("id")


    });
  }
  makeMove(startPile, endPile) {
    let pos = parseInt(startPile.attr("id")[1], 10);
    let endPos = parseInt(endPile.attr("id")[1], 10);
    let piece = startPile.children()[0]
    debugger
      this.game.move(pos, endPos);
      startPile.remove(piece);
      endPile.prepend(piece);
    }

}

module.exports = View;
