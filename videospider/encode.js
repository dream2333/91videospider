//解密js脚本
var encode_version = 'jsjiami.com.v5',
	eexda = '__0x9ff10',
	__0x9ff10 = ['w7FkXcKcwqs=', 'VMKAw7Fhw6Q=', 'w5nDlTY7w4A=', 'wqQ5w4pKwok=', 'dcKnwrTCtBg=', 'w45yHsO3woU=', '54u75py15Y6177y0PcKk5L665a2j5pyo5b2156i677yg6L+S6K2D5pW65o6D5oqo5Lmn55i/5bSn5L21', 'RsOzwq5fGQ==', 'woHDiMK0w7HDiA==', '54uS5pyR5Y6r7764wr3DleS+ouWtgeaesOW/sOeooe+/nei/ruitteaWsuaOmeaKiuS4o+eateW2i+S8ng==', 'bMOKwqA=', 'V8Knwpo=', 'csOIwoVsG1rCiUFU', '5YmL6ZiV54qm5pyC5Y2i776Lw4LCrOS+muWssOacteW8lOeqtg==', 'w75fMA==', 'YsOUwpU=', 'wqzDtsKcw5fDvQ==', 'wqNMOGfCn13DmjTClg==', 'wozDisOlHHI=', 'GiPConNN', 'XcKzwrDCvSg=', 'U8K+wofCmcO6'];
(function(_0x1f2e93, _0x60307d) {
	var _0x1f9a0b = function(_0x35f19b) {
			while (--_0x35f19b) {
				_0x1f2e93['push'](_0x1f2e93['shift']());
			}
		};
	_0x1f9a0b(++_0x60307d);
}(__0x9ff10, 0x152));
var _0x43d9 = function(_0x13228a, _0x2ce452) {
		_0x13228a = _0x13228a - 0x0;
		var _0x424175 = __0x9ff10[_0x13228a];
		if (_0x43d9['initialized'] === undefined) {
			(function() {
				var _0x270d2c = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
				var _0x58680b = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
				_0x270d2c['atob'] || (_0x270d2c['atob'] = function(_0x5536e1) {
					var _0x15e9d3 = String(_0x5536e1)['replace'](/=+$/, '');
					for (var _0x4e6299 = 0x0, _0x3590d2, _0x48c90b, _0x557f6a = 0x0, _0x2b086d = ''; _0x48c90b = _0x15e9d3['charAt'](_0x557f6a++);~_0x48c90b && (_0x3590d2 = _0x4e6299 % 0x4 ? _0x3590d2 * 0x40 + _0x48c90b : _0x48c90b, _0x4e6299++ % 0x4) ? _0x2b086d += String['fromCharCode'](0xff & _0x3590d2 >> (-0x2 * _0x4e6299 & 0x6)) : 0x0) {
						_0x48c90b = _0x58680b['indexOf'](_0x48c90b);
					}
					return _0x2b086d;
				});
			}());
			var _0x4a2d38 = function(_0x1f120d, _0x1d6e11) {
					var _0x4c36f9 = [],
						_0x1c4b64 = 0x0,
						_0x18ce5c, _0x39c9fa = '',
						_0x6d02b2 = '';
					_0x1f120d = atob(_0x1f120d);
					for (var _0x13b203 = 0x0, _0x24d88b = _0x1f120d['length']; _0x13b203 < _0x24d88b; _0x13b203++) {
						_0x6d02b2 += '%' + ('00' + _0x1f120d['charCodeAt'](_0x13b203)['toString'](0x10))['slice'](-0x2);
					}
					_0x1f120d = decodeURIComponent(_0x6d02b2);
					for (var _0x1f76f3 = 0x0; _0x1f76f3 < 0x100; _0x1f76f3++) {
						_0x4c36f9[_0x1f76f3] = _0x1f76f3;
					}
					for (_0x1f76f3 = 0x0; _0x1f76f3 < 0x100; _0x1f76f3++) {
						_0x1c4b64 = (_0x1c4b64 + _0x4c36f9[_0x1f76f3] + _0x1d6e11['charCodeAt'](_0x1f76f3 % _0x1d6e11['length'])) % 0x100;
						_0x18ce5c = _0x4c36f9[_0x1f76f3];
						_0x4c36f9[_0x1f76f3] = _0x4c36f9[_0x1c4b64];
						_0x4c36f9[_0x1c4b64] = _0x18ce5c;
					}
					_0x1f76f3 = 0x0;
					_0x1c4b64 = 0x0;
					for (var _0x2b6a92 = 0x0; _0x2b6a92 < _0x1f120d['length']; _0x2b6a92++) {
						_0x1f76f3 = (_0x1f76f3 + 0x1) % 0x100;
						_0x1c4b64 = (_0x1c4b64 + _0x4c36f9[_0x1f76f3]) % 0x100;
						_0x18ce5c = _0x4c36f9[_0x1f76f3];
						_0x4c36f9[_0x1f76f3] = _0x4c36f9[_0x1c4b64];
						_0x4c36f9[_0x1c4b64] = _0x18ce5c;
						_0x39c9fa += String['fromCharCode'](_0x1f120d['charCodeAt'](_0x2b6a92) ^ _0x4c36f9[(_0x4c36f9[_0x1f76f3] + _0x4c36f9[_0x1c4b64]) % 0x100]);
					}
					return _0x39c9fa;
				};
			_0x43d9['rc4'] = _0x4a2d38;
			_0x43d9['data'] = {};
			_0x43d9['initialized'] = !! [];
		}
		var _0x302f80 = _0x43d9['data'][_0x13228a];
		if (_0x302f80 === undefined) {
			if (_0x43d9['once'] === undefined) {
				_0x43d9['once'] = !! [];
			}
			_0x424175 = _0x43d9['rc4'](_0x424175, _0x2ce452);
			_0x43d9['data'][_0x13228a] = _0x424175;
		} else {
			_0x424175 = _0x302f80;
		}
		return _0x424175;
	};

function strencode2(_0x4f0d7a) {
	var _0x4c6de5 = {
		'Anfny': function _0x4f6a21(_0x51d0ce, _0x5a5f36) {
			return _0x51d0ce(_0x5a5f36);
		}
	};
	return _0x4c6de5[_0x43d9('0x0', 'fo#E')](unescape, _0x4f0d7a);
};