const {getApigeeView} = require("./views/apigee");
const {getAzureView} = require("./views/azure");
const {getRequestView} = require("./views/request");
require('dotenv').config();

module.exports.registerActions = function (app) {

	// Listen to the slash command, and when received, respond with a ephemeral message including the user who tirgerred the command
	app.action('button_apigee', async ({ ack, body, client, logger }) => {
		await ack();

		let newView = getApigeeView(null);
		const result = await client.views.push({
      view_id: body.view.id,
      hash: body.view.hash,
			trigger_id: body.trigger_id,
      view: newView.view
    });

	});

	app.action('button_azure', async ({ ack, body, client, logger }) => {
		await ack();

		let newView = getAzureView(null);
		const result = await client.views.push({
      view_id: body.view.id,
      hash: body.view.hash,
			trigger_id: body.trigger_id,
      view: newView.view
    });

	});

	app.action('button_request', async ({ ack, body, client, logger }) => {
		await ack();

		let newView = getRequestView(null);
		const result = await client.views.update({
			view_id: body.view.id,
			hash: body.view.hash,
			trigger_id: body.trigger_id,
			view: newView.view
		});

	});

	app.view('search_term', async ({ ack, body, client, logger }) => {
		await ack();
		if(body.view.state.values.search_term.search_term.value.toLowerCase() == 'apigee'){
			await client.views.open(getApigeeView(body.trigger_id));
		} else if(body.view.state.values.search_term.search_term.value.toLowerCase() == 'azure'){
			await client.views.open(getAzureView(body.trigger_id));
		}
	});

	app.view('knowledge_request', async ({ ack, body, client, logger }) => {
		await ack();
		const result = await client.chat.postMessage({
      channel: process.env.REQUEST_CHANNEL,
      text: `<@${body.user.id}> has requested a new article covering: *${body.view.state.values.request_form.request_term.value}*!`
    });
	});
}
