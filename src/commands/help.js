
'use strict'

const _ = require('lodash')
const config = require('../config')

const msgDefaults = {
  response_type: 'in_channel',
  username: '👏 Clapbot 👏',
  icon_emoji: config('ICON_EMOJI')
}

let clapped = payload.text;
clapped = clapped.split();
let clappedText = "";

for (var i = 0; i < clapped.length; i++) {
  clappedText = clappedText + clapped[i] + " 👏 ";
  clapped[i]
}

let attachments = [
  {
    // title: 'Starbot will help you find the hippest repos on GitHub',
    // color: '#2FA44F',
    text: clappedText,
    mrkdwn_in: ['text']
  },
]

const handler = (payload, res) => {
  let msg = _.defaults({
    channel: payload.channel_name,
    response_type: "in_channel",
    attachments: attachments
  }, msgDefaults)

  res.set('content-type', 'application/json')
  res.status(200).json(msg)
  return
}

module.exports = { pattern: /help/ig, handler: handler }
