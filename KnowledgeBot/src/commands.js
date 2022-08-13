const {getSearchView} = require("./views/search");
const {getSelectView} = require("./views/select");
const {getApigeeView} = require("./views/apigee");
const {getAzureView} = require("./views/azure");

module.exports.registerCommands = function (app) {

	// Listen to the slash command, and when received, respond with a ephemeral message including the user who tirgerred the command
	app.command('/knowledgebot', async ({ command, ack, payload, context, client, respond }) => {
	  // Acknowledge before doing anything
		ack()

		try {
				// Open a modal
				if(command.text.toLowerCase() == 'search'){
					await client.views.open(getSearchView(command.trigger_id));
				} else if(command.text.toLowerCase() == 'apigee' || command.text.toLowerCase() == 'proxy'){
					await client.views.open(getApigeeView(command.trigger_id));
				}	else if(command.text.toLowerCase() == 'azure' || command.text.toLowerCase() == 'cloud'){
						await client.views.open(getAzureView(command.trigger_id));
				} else {
					await client.views.open(getSelectView(command.trigger_id));
				}

		}
		catch (error) {
				console.log(error)
		}
	});
}
