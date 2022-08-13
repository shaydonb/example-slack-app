const {getSelectView} = require("./views/select");

module.exports.registerShortcuts = function (app) {

    // Global Shortcut
    app.shortcut('knowledgebot', async ({ shortcut, ack, client }) => {
        ack()
        try {
            const globalShortcutView = await client.views.open(getSelectView(shortcut.trigger_id));
        }
        catch (error) {
            console.log(error)
        }
    });


}
