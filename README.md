# RSA-SHA256 Signature Generator

This project is a simple web-based RSA-SHA256 signature generator. It allows users to input a JSON body and a private key, then generates a signed signature that can be used in the `X-Hub88-Signature` header.

## Features
- Input JSON body and private key
- Generate RSA-SHA256 signatures encoded in Base64
- Copy the generated signature easily with a button
- Responsive and user-friendly UI

## Prerequisites
Before using this tool, you need to generate an RSA key pair (public and private keys). You can use the following online tool to create your keys:
[Travis Tidwell's JSEncrypt Demo](https://travistidwell.com/jsencrypt/demo/)

## How to Use
1. Open `index.html` in your browser.
2. Enter the JSON body in the provided textarea.
3. Paste your private RSA key.
4. Click on the "Generate Signature" button.
5. Copy the generated signature using the "Copy Signature" button.
6. Use the signature in the `X-Hub88-Signature` header of your requests.

## File Structure
```
- index.html   # Main HTML file
- styles.css   # Styles for the UI
- script.js    # JavaScript logic for signing and copying
```

## Technologies Used
- HTML
- CSS
- JavaScript
- [Forge.js](https://github.com/digitalbazaar/forge) for cryptographic operations

## License
This project is open-source and free to use. Modify as needed for your application.

