// noprotect
let zoomSlider;

function setup() {
  createCanvas(500, 500);
  zoomSlider = createSlider(1, 10, 4, 0.1); // 最小値、最大値、初期値、ステップ
}

function draw() {
  background(255);

  let maxIterations = 100;
  let scale = 4;
  let zoom = zoomSlider.value();
  
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let a = map(x, 0, width, -scale / zoom, scale / zoom);
      let b = map(y, 0, height, -scale / zoom, scale / zoom);

      let ca = -0.70176;
      let cb = -0.3842;

      let n = 0;
      while (n < maxIterations) {
        let aa = a * a - b * b;
        let bb = 2 * a * b;
        a = aa + ca;
        b = bb + cb;
        if (abs(a + b) > 16) {
          break;
        }
        n++;
      }

      let bright = map(n, 0, maxIterations, 0, 1);
      bright = map(sqrt(bright), 0, 1, 0, 255);

      let pix = (x + y * width) * 4;
      stroke(bright);
      point(x, y);
    }
  }
}


