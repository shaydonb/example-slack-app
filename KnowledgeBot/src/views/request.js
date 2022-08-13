const getRequestView = (trigger_id) => {

    const viewObj = {
        trigger_id: trigger_id,
        view: {
          "type": "modal",
          "callback_id":"knowledge_request",
          "title": {
              "type": "plain_text",
              "text": "Request a New Article",
              "emoji": true
          },
          "submit": {
              "type": "plain_text",
              "text": "Submit",
              "emoji": true
          },
          "close": {
              "type": "plain_text",
              "text": "Cancel",
              "emoji": true
          },
          "blocks": [
              {
                  "type": "input",
                  "block_id": "request_form",
                  "element": {
                      "type": "plain_text_input",
                      "action_id": "request_term",
                      "max_length": 50
                  },
                  "label": {
                      "type": "plain_text",
                      "text": "What would you like to see?",
                      "emoji": true
                  }
              }
          ]
        }

    }

    return viewObj;
}

module.exports = { getRequestView }
