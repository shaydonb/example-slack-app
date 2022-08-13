const getAzureView = (trigger_id) => {
    const viewObj = {
        trigger_id: trigger_id,
        view: {
          "type": "modal",
          callback_id: "apigee_view",
          title: {
              type: "plain_text",
              text: "Azure",
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
        				"text": "Deploying Your Apps to *Microsft Azure*"
        			}
        		},
        		{
        			"type": "divider"
        		},
        		{
        			"type": "section",
        			"text": {
        				"type": "mrkdwn",
        				"text": "*What is Azure?*\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
        			},
        			"accessory": {
        				"type": "image",
        				"image_url": "https://www.loffler.com/hubfs/Microsoft%20Azure%20Blog.jpg",
        				"alt_text": "alt text for image"
        			}
        		},
        		{
        			"type": "section",
        			"text": {
        				"type": "mrkdwn",
        				"text": "*Application Container*\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ."
        			},
        			"accessory": {
        				"type": "image",
        				"image_url": "https://demiliani.files.wordpress.com/2020/07/aciartifacts_00.jpg",
        				"alt_text": "alt text for image"
        			}
        		},
        		{
        			"type": "section",
        			"text": {
        				"type": "mrkdwn",
        				"text": "*Docker*\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ."
        			},
        			"accessory": {
        				"type": "image",
        				"image_url": "https://i0.wp.com/build5nines.com/wp-content/uploads/2020/05/Docker_Development_VM_in_Azure_Featured_Image.jpg?fit=900%2C506&ssl=1",
        				"alt_text": "alt text for image"
        			}
        		},
        		{
        			"type": "section",
        			"text": {
        				"type": "mrkdwn",
        				"text": "*Security Policy*\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ."
        			},
        			"accessory": {
        				"type": "image",
        				"image_url": "https://i1.wp.com/cloudsecurityknowledgesharing.com/wp-content/uploads/2018/08/Azure_security_logo.png?fit=225%2C225&ssl=1",
        				"alt_text": "alt text for image"
        			}
        		}
        	]

        }

    }

    return viewObj;
}

module.exports = { getAzureView }
