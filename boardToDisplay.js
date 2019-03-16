const boardToDisplay = {
  "text": "Your turn",
  "replace_original": true,
  "attachments": [
    {
      "callback_id": "ttt-btn",
      "color": "#3AA3E3",
      "actions": [
        {
          "name": "game",
          "text": "-",
          "type": "button",
          "value": "1"
        },
        {
          "name": "game",
          "text": "-",
          "type": "button",
          "value": "2"
        },
        {
          "name": "game",
          "text": "-",
          "type": "button",
          "value": "3"
        }
      ]
    },
    {
      "callback_id": "ttt-btn1",
      "color": "#3AA3E3",
      "actions": [
        {
          "name": "game",
          "text": "-",
          "type": "button",
          "value": "4"
        },
        {
          "name": "game",
          "text": "-",
          "type": "button",
          "value": "5"
        },
        {
          "name": "game",
          "text": "X",
          "type": "button",
          "value": "6"
        }
      ]
    },
    {
      "callback_id": "ttt-btn1",
      "color": "#3AA3E3",
      "actions": [
        {
          "name": "game",
          "text": "-",
          "type": "button",
          "value": "7"
        },
        {
          "name": "game",
          "text": "0",
          "type": "button",
          "value": "8"
        },
        {
          "name": "game",
          "text": "X",
          "type": "button",
          "value": "9"
        }
      ]
    }
  ]
};
module.exports = boardToDisplay;
