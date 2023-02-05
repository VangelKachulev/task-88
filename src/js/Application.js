import EventEmitter from "eventemitter3";
import anime from "animejs";
export default class Application extends EventEmitter {
    static get events() {
        return {
            READY: "ready",
        };
    }

    constructor() {
        super();
        this.init();

        this.emit(Application.events.READY);

    }
    init() {
        let article = document.querySelector('.article');
        article.addEventListener('click', (e) => {
            console.log(article);

            anime({
                targets: '.article',
                translateX: 250,
                direction: 'alternate',
                loop: true,
                
            })

        })

    }



}