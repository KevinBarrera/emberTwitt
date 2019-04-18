import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
	/* @tracked tweets = [
		{ id:1, userName:"KevinBH", description:"hola"},
		{ id:2, userName:"KevinBH", description:"hola"},
		{ id:3, userName:"KevinBH", description:"hola"},
	]; */

	@action
	onSubmit (text){
		let post = this.store.createRecord('draft_tweet', {
			avatar: "https://image.flaticon.com/icons/png/512/10/10906.png",
			user_name: "KevinBH",
			description: text,
			created_at: "2019-04-17"
		});

		post.save(); // => POST to '/posts'

		/* let tweetsCopy = this.tweets.slice();

		this.tweets = tweetsCopy.concat({
			id: Math.floor(Math.random() * 100) + 3,
			user_name: "KevinBH",
			description: text,
			created_at: "2019-04-11"
		}); */
	}
}
