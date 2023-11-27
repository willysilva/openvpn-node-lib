# Node.js OpenVPN Library

This Node.js library provides functionality to manage OpenVPN connections using Node.js. It allows you to start an OpenVPN connection, handle its output, and stop the connection programmatically.

## Installation

To use this library, you'll need Node.js installed on your machine. Clone or download this repository and then install the dependencies using npm:

```bash
npm install
```


## Usage
Starting an OpenVPN Connection
To start an OpenVPN connection, use the startOpenVPN() function:

``` 
const openvpn = require('node-openvpn-lib');

openvpn.startOpenVPN(`path/certificate.opvn, path/credentials.txt`);

```