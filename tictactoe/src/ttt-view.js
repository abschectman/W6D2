class View {
  constructor(game, $el) {
    this.game = game
    this.$el = $el
    this.setupBoard($el);
    this.bindEvents();
  }

  bindEvents() {
    $(".grid > li").on('click', e => {
      const $li = $(e.currentTarget);
      if(!this.game.isOver()){
      this.makeMove($li);
      }
    });

  }

  makeMove($square) {
    // debugger
    let mark = this.game.currentPlayer;
    this.game.playMove($square.data("pos"));
    $square.removeClass("untoggled");
    $square.addClass("toggled");
    $square.append(`<span> ${mark} </span>`)
    if (this.game.isOver()) {
      $(this.$el).append(`<div>${mark} wins!</div>`);
    }
  }

  setupBoard(el) { 
    let $li;
    const $ul = $("<ul>");
    $ul.addClass("grid");
      for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
          $li = $("<li>")
          $ul.append($li);
          $li.data("pos", [x, y]);
          $li.addClass("untoggled");

      }  
    }
     el.append($ul); 
  }
}


module.exports = View;
