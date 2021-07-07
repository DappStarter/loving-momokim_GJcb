require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index repeat sad pupil hidden enter equal genuine'; 
let testAccounts = [
"0x00ffe151e893883b338a8400a2a4b8af2fd46eff5cbb22d7e2cf355388aff93b",
"0xbe1b197a85ee25224a4df876af6949e87a74fa2d91e08a223a5f9425fb87e08f",
"0x3eaa9078d58e06f2eea1713a84acc0b7ff89db78e443287516ff830d40fec275",
"0xdfc1bb01c2dcbf00941f3246ac24db2d19d4693a8c6e3c4552b080d8f307baa5",
"0x4a50c522323768137419ad3b504a606e406a73428492427b935bcf6694b17f7d",
"0x52676152fdf80d70c776e339e3579c2e26144d0cd922fd6882317f7161f76696",
"0xa4f45c17bded775191bd34df2b6a2aa5b1caa07a1674bcdb61d6faa0c6576555",
"0xa6a9479a0d547d7a76989f9129d6d364aa4a667f9323a7d828c4cf8385262e00",
"0x738a3dc92552b43310ed1e5f924ff010edc0212533009266aecd125943805e77",
"0xac070e38622c8dbb693dce3bda96a963cd09b3fa1a00f4188651d9bd9f16ab35"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

