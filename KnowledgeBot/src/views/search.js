const getSearchView = (trigger_id) => {

    const viewObj = {
        trigger_id: trigger_id,
        view: {
          "type": "modal",
          "callback_id":"search_term",
          "title": {
              "type": "plain_text",
              "text": "Search for an Article",
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
                  "block_id": "search_term",
                  "element": {
                      "type": "plain_text_input",
                      "action_id": "search_term",
                      "max_length": 50
                  },
                  "label": {
                      "type": "plain_text",
                      "text": "Search Term",
                      "emoji": true
                  }
              }
          ]
        }

    }

    return viewObj;
}

module.exports = { getSearchView }
