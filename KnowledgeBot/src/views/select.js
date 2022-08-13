const getSelectView = (trigger_id) => {

    const viewObj = {
        trigger_id: trigger_id,
        view: {
          "type": "modal",
          "callback_id":"search_term",
          "title": {
              "type": "plain_text",
              "text": "T-Mobile Knowledge Bot",
              "emoji": true
          },

          "blocks": [

            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: 'Welcome to the *Knowledge Bot*! \nPlease select your article below.'
              }
          },
          {
            "type": "divider"
          },
          {
                type: 'section',
                text: {
                  type: 'mrkdwn',
                  text: '*Apigee*\nSetting Up Proxies for Deployment'
                },
                accessory: {
                  type: 'button',
                  style: 'primary',
                  text: {
                    type: 'plain_text',
                    text: 'View Article'
                  },
                  action_id: 'button_apigee'
                }
            },{
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: '*Azure*\nDeploying Your App to Azure'
              },
              accessory: {
                type: 'button',
                style: 'primary',
                text: {
                  type: 'plain_text',
                  text: 'View Article'
                },
                action_id: 'button_azure'
              }
          },{
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: '*Security*\nBest practices and How-Tos'
            },
            accessory: {
              type: 'button',
              style: 'primary',
              text: {
                type: 'plain_text',
                text: 'View Article'
              },
              action_id: 'button_security'
            }
        },{
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: '*Request an Article*\nDon\'t see what you\'re looking for?'
            },
            accessory: {
              type: 'button',
              style: 'danger',
              text: {
                type: 'plain_text',
                text: 'Request'
              },
              action_id: 'button_request'
            }
        },
          ]
        }

    }

    return viewObj;
}

module.exports = { getSelectView }
