let mic;
let cnv;
let sensitive = 7;
let happy;
let sad;
let background;

function setup() {
    cnv = createCanvas(1, 1);
    cnv.position(100, 1);
    mic = new p5.AudioIn();
    mic.start();
    sad = select('.sad');
    happy = select('.happy');
    background = select('body');
}

function draw() {
    getAudioContext().resume();
    let vol = (mic.getLevel() * 3000);

    if (vol > 20) {
        sensitive = sensitive + 2;
    } else {
        sensitive = sensitive - 1;
    }

    if (sensitive < 10) {
        sensitive = 10;
    } else if (sensitive > 350) {
        sensitive = 350;
    }


    if (sensitive > 100) {
        happy.style('display', 'block');
        sad.style('display', 'none');
        background.style('background-color', '#90D7EC')

    } else {
        happy.style('display', 'none');
        sad.style('display', 'block')
        background.style('background-color', '#FFDE94')
    }

    console.log(sensitive);
}
