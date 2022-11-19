## <h1 align="center">Fricon</h1>

**<p align="center">Easily upload fricon emojis to your discord server!</p>**

## Installation

```bash
npm i @fricon/discord
```

## Usage

```js
const fricon = require("@fricon/discord")
```

## Upload

```js
await fricon.upload({
  guild: message.guild,
  emoji: "hammer"
})
```

## Upload All

```js
await fricon.uploadAll({
  guild: message.guild
})
```

## Ping

```js
await fricon.ping()
```
