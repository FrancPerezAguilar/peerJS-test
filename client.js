const Peer = require('peerjs');

const peer = Peer();

peer.on('open', function (id) {
    console.log('My peer ID is: ' + id);
});