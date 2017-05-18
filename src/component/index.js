import { v4 } from "node-uuid";
import * as _ from "lodash";
import { event } from "../event";

export class Componnet {
    constructor() {
        this._id = v4();
        this._firstRender = true;
        this.state = {};
        this.props = {};
        this.parentNode = null;
    }

    willMount() {}

    mounted() {}

    willUpdate() {}

    updated() {}

    unMount() {}

    shouldUpdate(prevState, nextState) {
        return true;
    }

    beforeUpdate() {}

    afterUpdate() {}

    async setState(state, callback) {
        const keys = Object.keys(state),
        	{ length } = keys;
       	if(length) {
       		for(let key of keys) {
       			this.state[key] = state[key];
       		}
       	}
        await callback();
        if (this.shouldUpdate()) {
        	this.renderDOM();
        }
    }

    render() {
    }

    renderDOM() {
    	const { _firstRender } = this;
    	if(_firstRender) {
    		this.willMount();
    	} else {
    		this.willUpdate();
    	}
    	this.render();
    	if(_firstRender) {
    		this.mounted();
    		this._firstRender = false;
    	} else {
    		this.updated();
    	}
    }
}
