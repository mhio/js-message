# @mhio/message

Standardised messages inside your app, with an id and timestamp.

## Install

```
yarn add @mhio/message
npm install @mhio/message
```

## Usage

```
const { Message, MessageData } = require('@mhio/message')

let m = new Message()
// Message { id: 'OLZmJLjSReTYqZYVAM', ts: 1520632858508 }

let md = new MessageData({ foo: 'bar' })
// MessageData { id: 'kC8gVDlWW89PS8gDX2', ts: 1520632986181, data: { foo: 'bar' } } 
```
