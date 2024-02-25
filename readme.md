# Telegram Bot for Earthquake Information

This is a simple Telegram bot that fetches real-time earthquake information from BMKG (Meteorology, Climatology, and Geophysical Agency of Indonesia) and sends it to the user.

## Dependencies

This bot uses the following npm packages:

- `node-telegram-bot-api`: A Node.js wrapper for the Telegram Bot API.

## Setup

1. Clone this repository.
2. Run `npm install` to install the dependencies.
3. Replace `'6759973022:AAH-vy8TJcGrgZqSv5udDxx_ig9VsxXp4nA'` with your own Telegram Bot token in the `main.js` file.
4. Run the bot with `node main.js`.

## Usage

Once the bot is running, you can interact with it on Telegram. Send `/gempa` to the bot, and it will respond with the latest earthquake information.

The information includes:

- Time of the earthquake
- Magnitude
- Location
- Potential impact
- Depth

The bot also sends a shakemap image along with the information.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
