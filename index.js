import { Componnet, render } from "./src";

const doc = document,
    app = doc.querySelector("#app");

class Test extends Componnet {
    constructor() {
        super();
        this.state = {
            color: "red"
        };
    }

    willMount() {
        console.log("willMount");
    }

    mounted() {
        console.log("mounted");
    }

    willUpdate() {
        console.log("willUpdate");
    }

    updated() {
        console.log("updated");
    }

    unMount() {
        console.log("unMount");
    }

    render() {
        return (
            <div className="container">
                <h1>Cuty</h1>
            </div>
        );
    }
}

console.log(new Test().render());
