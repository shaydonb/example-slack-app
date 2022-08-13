const getApigeeView = (trigger_id) => {

    const viewObj = {
        trigger_id: trigger_id,
        view: {
          "type": "modal",
          callback_id: "apigee_view",
          title: {
              type: "plain_text",
              text: "Apigee",
              emoji: true
          },
          "close": {
              "type": "plain_text",
              "text": "Back",
              "emoji": true
          },
        	"blocks": [
        		{
        			"type": "section",
        			"text": {
        				"type": "mrkdwn",
        				"text": "Setting Up *Apigee Proxies*"
        			}
        		},
        		{
        			"type": "divider"
        		},
        		{
        			"type": "section",
        			"text": {
        				"type": "mrkdwn",
        				"text": "*Submit Intake*\n:star: _Use the Workflow in #plz-apigee_\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
        			},
        			"accessory": {
        				"type": "image",
        				"image_url": "https://www.smartsheet.com/sites/default/files/2020-08/IC-Simple-Client-Intake-Form-Template_WORD.png",
        				"alt_text": "alt text for image"
        			}
        		},
        		{
        			"type": "section",
        			"text": {
        				"type": "mrkdwn",
        				"text": "*Define your Proxies*\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
        			},
        			"accessory": {
        				"type": "image",
        				"image_url": "https://images.squarespace-cdn.com/content/v1/51814c87e4b0c1fda9c1fc50/1491315182695-314XBXWXGF034MLKKF02/swagger-hello-world.png?format=1000w",
        				"alt_text": "alt text for image"
        			}
        		},
        		{
        			"type": "section",
        			"text": {
        				"type": "mrkdwn",
        				"text": "*Deploy to Non-Prod*\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ."
        			},
        			"accessory": {
        				"type": "image",
        				"image_url": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1397194583/2738bde3ad08b0cfa2702ad277c4c129.png",
        				"alt_text": "alt text for image"
        			}
        		},
        		{
        			"type": "section",
        			"text": {
        				"type": "mrkdwn",
        				"text": "*Deploy to Production*\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ."
        			},
        			"accessory": {
        				"type": "image",
        				"image_url": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1397194583/2738bde3ad08b0cfa2702ad277c4c129.png",
        				"alt_text": "alt text for image"
        			}
        		}
        	]

        }

    }

    return viewObj;
}

module.exports = { getApigeeView }
