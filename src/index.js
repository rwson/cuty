export class Componnet {
	constructor() {
	}

	setState(state, callback) {
		Object.keys(state).forEach((key) => {
			this.state[key] = state[key];
		});
		callback();
		if (this.render) {
			this.render();
		}
	}
}