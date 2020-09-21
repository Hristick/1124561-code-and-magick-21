'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 50;
const FONT_GAP = 15;
const TEXT_OFSET = 50;
const TEXT_WIDTH = 100;
const BAR_HEIGHT = 150;
const BAR_WIDTH = 40;
const SHADOW_OFSET = 10;
const MY_WIN_COLOR = 'rgba(255, 0, 0, 1)';


let renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

let getMaxElement = function(arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times, color) {
  renderCloud(
    ctx,
    CLOUD_X + SHADOW_OFSET,
    CLOUD_Y + SHADOW_OFSET,
    'rgba(0, 0, 0, 0.7)'
  );
  renderCloud(
    ctx,
    CLOUD_X,
    CLOUD_Y,
    '#fff'
  );

  ctx.fillStyle = '#000';
  ctx.font = "PT Mono 48px";
  ctx.fillText("Ура вы победили!", GAP * 2 + FONT_GAP, GAP);
  ctx.fillText("Список результатов: ", GAP * 2 + FONT_GAP, GAP + FONT_GAP);


  let maxTime = getMaxElement(times);

  for (let i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = MY_WIN_COLOR;
    } else {
      ctx.fillStyle = `hsl(255, 100%,` + Math.random() * 100 + `%)`;
    }
    ctx.fillRect(
      TEXT_OFSET + TEXT_WIDTH + (TEXT_WIDTH * i),
      TEXT_WIDTH * 2 + GAP,
      BAR_WIDTH, (BAR_HEIGHT * times[i] / maxTime) * -1)

      ctx.fillStyle = '#000';
      ctx.font = "PT Mono 48px";
      ctx.fillText(
        players[i],
        TEXT_OFSET + TEXT_WIDTH + (TEXT_WIDTH * i),
        CLOUD_HEIGHT
        );

        ctx.fillText(Math.floor(times[i]), TEXT_OFSET + TEXT_WIDTH + (TEXT_WIDTH * i), CLOUD_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime - (GAP - FONT_GAP));
      };
    };

