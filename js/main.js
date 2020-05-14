'use strict'
  
{ 
    // クラスをつくる
    class Panel {

        constructor() {
            const section = document.createElement('section');
            section.classList.add('panel');

            this.img = document.createElement('img');
            this.img.src = this.getRandomImage();

            this.timeoutId = undefined;

            this.stop = document.createElement('div');
            this.stop.textContent = 'STOP';
            this.stop.classList.add('stop');
            this.stop.addEventListener('click', () => {
                clearTimeout(this.timeoutId);  //???
            });

            section.appendChild(this.img);
            section.appendChild(this.stop);

            const main = document.querySelector('main');
            main.appendChild(section);
        }


    // メソッド
    getRandomImage() {
        const images = [
            'img/seven.png',
            'img/bell.png',
            'img/cherry.png'
        ];
        return images[Math.floor(Math.random() * images.length)]
    }

    spin() {
        this.img.src = this.getRandomImage();
        this.timeoutId = setTimeout( () => { //一定時間ごとにspin();をよびだす
            this.spin();
        },50);
    }



    }
        // html消してインスタンスをつくる
    const panels = [
        new Panel(),
        new Panel(),
        new Panel(),
    ];

    const spin = document.getElementById('spin');
    spin.addEventListener('click', () => {
        panels.forEach(panel => {
            panel.spin();
        });

    });
}