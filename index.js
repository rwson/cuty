import { Componnet } from "./build";

const doc = document,
    app = doc.querySelector("#app");

const createDOMFromString = (domString) => {
    const div = doc.createElement("div");
    div.innerHTML = domString;
    return div;
}

class LikeButton {

    constructor() {
        this.state = {
            isLiked: false
        };
    }

    setState(state) {
        this.state = state
        this.el = this.render();
    }

    changeLikeText() {
        this.setState({
            isLiked: !this.state.isLiked
        });
    }

    render() {
        this.el = createDOMFromString(
            `
            <button class="like-btn">
              <span class="like-text">${this.state.isLiked ? "取消" : "点赞"}</span>
              <span class="like-ico">👍</span>
            </button>
            `
        );
        this.el.addEventListener("click", this.changeLikeText.bind(this));
        return this.el;
    }
}

let lbn = new LikeButton();

app.appendChild(lbn.render());
