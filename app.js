// server: connect4ws.herokuapp.com

var app = new Vue({
  el: '#game',
  data: {
    board: [
      [1, 0, 0, 0, 0, 0],
      [1, 2, 0, 0, 0, 0],
      [1, 2, 1, 0, 0, 0],
      [1, 2, 1, 2, 0, 0],
      [1, 2, 1, 0, 0, 0],
      [1, 2, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0]
    ]
  },
  methods: {
    play: function (position) {
      console.log('column', position, 'clicked');
    }
  },
  created: function () {
    console.log('ready');
  }
});
