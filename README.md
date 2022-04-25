# Docker for nginx with ssl

## Usage
 - run express example `node express/index.js` 
 - run `docker-compose up -d`  this will start nginx server on `https://localhost`

Nginx proxy conf in `conf/default.conf`




------------
FYI: Chrome on MacOS treats this different than Windows. MacOS version won't see the proceed button even you click advanced button.

To still proceed the visit as you are sure this page is safe, here is a easy way to do:

There's a secret passphrase built into the error page. Just make sure the page is selected (click anywhere on the screen), and just type thisisunsafe.

Ref: https://twitter.com/zairwolf/status/1196878125734486021