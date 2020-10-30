const {mergeMochaConfigs} = require('@loopback/build');
const defaultConfig = require('@loopback/build/config/.mocharc.json');

const CRYPTO_CONFIG = {
  timeout: 10000,
};

module.exports = mergeMochaConfigs(defaultConfig, CRYPTO_CONFIG);
