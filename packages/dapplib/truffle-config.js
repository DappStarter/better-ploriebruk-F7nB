require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet return random unusual harvest climb orient typical'; 
let testAccounts = [
"0x7a4c347cccfc8e23bf2f21ac3a40877fe13f2749127a8a42f4f4dfd19aeb4250",
"0x4cc6c0053fdb9688a3a27abcff96711b2e679e001a9424bd7ea9468f6340de9d",
"0x4da5f950ab51db48ace92fac03f37fe53b8c6133402fdd5d406328c61e9cd328",
"0xa406b2b3b4263026f0619448a18d229003c530dab0e60ce2f39e540fbefefaaf",
"0x7660e3179c5c89bc9367375328ed634d78ed3924d6b29dbeaa07f1dee399ca63",
"0xb0bdbfd21f17e7647035638895ba6d8b35ac63bbb04b978992204be2ae2926ef",
"0xc0d956a334eba80ba7383f03a0f051199c1ad5a6a51fcd49c84e7a579c09b75b",
"0x62be5485d5dcb2a13f297241023c47307f73317f82b4710b053aa20dec0eb630",
"0x995aa0e0f12c695e55ea5e1a6c1c20d8cbcd3d199636c8f6ee6e245a5c7db134",
"0x97c0d8851c424a86f6e27264d8a201f289b7b83b7b9b5cc5a11d2abe396ecbce"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


