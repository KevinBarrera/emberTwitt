import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TwitterBoxComponent extends Component {
	@tracked text;

	@action 
	handleChange(text) {
		this.text = text;
	}

	@action 
	async handleSubmit() {
		let text = this.text;

		let req = await this.args.handleSubmit(text); //cuando se va a hacer una petición afuera al ser POST va a ser una promesa
		this.error = req.error;
		//Dejar el texto vacio para otros twitts
		this.text = '';
	}
}
