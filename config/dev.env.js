'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const os = require('os');
function getNetworkIp() {
	let needHost = ''; // 打开的host
	try {
		// 获得网络接口列表
		let network = os.networkInterfaces();
		for (let dev in network) {
			let iface = network[dev];
			for (let i = 0; i < iface.length; i++) {
				let alias = iface[i];
				if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
					needHost = alias.address;
				}
			}
		}
	} catch (e) {
		needHost = 'localhost';
  }
	return needHost;
}
let myIp = "'" + getNetworkIp().toString() + "'";
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  myIp: myIp,
  host: getNetworkIp(),
  API_ROOT: '"https://gcxt-beta.myfuwu.com.cn"'
  // API_ROOT: '"http://10.5.217.105"'
})
