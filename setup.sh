#!/bin/bash
export SLACK_BOT_TOKEN="xoxb-your-token"
export SLACK_SIGNING_SECRET="your-signing-secret"

# TODO: Ensure proper installation of `ngrok`, allow shutdown option if process already running
ngrok http 3000 & bg

