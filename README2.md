# Yukon

Visit the Discord server for more support.

[![Yukon Discord members](https://badgen.net/discord/members/gxBqXy3qeY)](https://discord.gg/gxBqXy3qeY)

## Built With

* [Node.js](https://nodejs.org/en/)
* [Socket.IO](https://socket.io/)
* [Phaser 3](https://phaser.io/)
* [Phaser Editor](https://phasereditor2d.com/)
* [Texture Packer](https://www.codeandweb.com/texturepacker)

## Local Installation

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites

* [Node.js](https://nodejs.org/en/)
* [yukon-server](https://github.com/wizguin/yukon-server)
* assets

### Installation

1. Clone this repository.

```console
git clone https://github.com/wizguin/yukon
```

2. Install node dependencies.

```console
npm install
```

3. Merge contents of assets into the assets folder.

### Usage

* Running the dev server.

```console
npm run dev
```

* Running [Phaser Editor](https://phasereditor2d.com/) for scene editing.

```console
npm run editor
```

* Building the client for production. Production files can be found in "/dist".

```console
npm run build
```

* Building crumbs. This will merge files in "/assets/media/crumbs/en" into a single json file, you only need to run this when modifying crumbs.

```console
npm run build-crumbs
```

### Scene Editing

Editing .scene files requires a copy of [Phaser Editor](https://phasereditor2d.com/).

### Account creation

If you'd like to use the included PHP account registration locally, you must host it on a PHP supported web server running on port 80 at the path "/create/scripts/php". Webpack dev server will proxy requests accordingly.

```console
'/create/scripts/php': 'http://localhost:80'
```

See [here](https://github.com/wizguin/yukon-server#account-creation) for a simpler way to create accounts locally.

## Production Usage

The following is required when running the project in production.

* Routes for proxying game worlds must be set up on your web server, the following is an example of an [Apache](https://www.apache.org/) configuration.

```console
RewriteEngine on

RewriteCond %{REQUEST_URI} ^/world/login [NC]
RewriteCond %{HTTP:Upgrade} websocket [NC]
RewriteCond %{HTTP:Connection} upgrade [NC]
RewriteRule /(.*) ws://localhost:6111/$1 [P,L]
ProxyPass /world/login http://localhost:6111

RewriteCond %{REQUEST_URI} ^/world/blizzard [NC]
RewriteCond %{HTTP:Upgrade} websocket [NC]
RewriteCond %{HTTP:Connection} upgrade [NC]
RewriteRule /(.*) ws://localhost:6112/$1 [P,L]
ProxyPass /world/blizzard http://localhost:6112
```

* Make sure to use the minified bundle and index.html file generated with the build command. These can be found in "/dist" (the contents can just be merged onto your web server).

* To modify the outputted index.html file, edit the template file "index.ejs" and rebuild.

* If you aren't going to be making any changes to the code, then the latest release can be downloaded from [here](https://github.com/wizguin/yukon/releases).

## Disclaimer

This project is intended for personal use only.

This project is a work in progress, please report any issues you find [here](https://github.com/wizguin/yukon/issues).
# kCPPS
# kCPPS
