# Node red Crypto utilities

## Overview

Some nodes that wrap [Node.js Crypto](https://nodejs.org/api/crypto.html).

## AES

Algorithm: aes-256-cbc

### encrypt

input (msg.paylaod):
```json
{
	"key": <string> | <ArrayBuffer> | <Buffer> | <TypedArray> | <DataView> | <KeyObject> | <CryptoKey>,
	"data": <Buffer>
}
```

output:
```json
{
	"encryptedData": <Buffer>,
	"initVector": <Buffer>
}
```

### decrypt

input (msg.paylaod):
```json
{
	"key": <string> | <ArrayBuffer> | <Buffer> | <TypedArray> | <DataView> | <KeyObject> | <CryptoKey>,
	"data": <Buffer>
	"initVector": <Buffer>
}
```

output:
```json
	"payload": <Buffer>,
```


## RSA

### encrypt

input (msg.paylaod):
```json
{
	"publicKey": <string> | <ArrayBuffer> | <Buffer> | <TypedArray> | <DataView> | <KeyObject> | <CryptoKey>,
	"data": <string> | <ArrayBuffer> | <Buffer> | <TypedArray> | <DataView> | <object>
}
```

output:
```json
	"payload": <cBuffer>
```

### decrypt

input (msg.paylaod):
```json
{
	"privateKey": <string> | <ArrayBuffer> | <Buffer> | <TypedArray> | <DataView> | <KeyObject> | <CryptoKey>,
	"data": <Buffer>
}
```

output:
```json
	"payload": <Buffer>,
```

## SHA256

input (msg.paylaod):
```json
	"payload": <string> | <ArrayBuffer> | <Buffer> | <TypedArray>
```

output:
```json
	"payload": <Buffer>,
```

