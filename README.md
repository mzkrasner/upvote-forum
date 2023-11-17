# BanklessDeSci Community Hub

An open social application for the decentralized science community. Governed and moderated by the BanklessDeSci community. Built on Orbis and Ceramic with love.

## Getting Started (to be updated)

To get started developers should start by creating their `project` and `context` using the [Orbis Dashboard](https://useorbis.com/dashboard). The ID of the context created should be used in `_app.js`.

## Styles

Most of the colors can be updated in the `styles/global.css` file which contains CSS variables applied to the main `html` property.

## Getting Started Running Locally

1. Install your dependencies:

```bash
npm install
```

2. Generate your admin seed, admin did, and ComposeDB configuration file:

```bash
npm run generate
```

3. Create a .env file and enter the required environment variables outlined in .env.example. Feel free to copy them over as-is since the ones in .env.example are just dummy ones

4. Run the application (make sure you are using node version 16):

#### Development
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
