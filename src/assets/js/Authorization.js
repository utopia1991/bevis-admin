import './Cryptojs'

var cryptojs = window.CryptoJS

cryptojs.encodeUriQuery = function (val, pctEncodeSpaces) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, (pctEncodeSpaces ? '%20' : '+')).replace(/'/g, escape('\''))
}

cryptojs.HttpUrlFormat = function (urlOld, dataUrl, method) {
  if (dataUrl) {
    var urlArray = []
    var angular

    dataUrl = angular.isArray(dataUrl) ? (dataUrl.length > 0 ? dataUrl[0] : []) : dataUrl
    angular.forEach(dataUrl, function (value, key) {
      if (angular.isArray(value)) {
        var arrayValueCell = []
        angular.forEach(value, function (valueCell, keyCell) {
          arrayValueCell.push(key + '=' + cryptojs.encodeUriQuery(valueCell))
        })
        if (arrayValueCell.length > 0) {
          urlArray.push(arrayValueCell.join('&'))
        }
      } else {
        if (urlOld.indexOf(':' + key, value) !== -1) {
          urlOld = urlOld.replace(':' + key, cryptojs.encodeUriQuery(value))
        } else {
          urlArray.push(key + '=' + cryptojs.encodeUriQuery(value))
        }
      }
    })

    // Sort by key, keep the same url as angular, or 401(Unauthorization) may occur due to Mac签名错误
    urlArray.sort(function (a, b) {
      return a.localeCompare(b)
    })
    urlOld = encodeURI(urlOld) + (urlArray.length > 0 ? ('?' + urlArray.join('&')) : '')
  } else {
    urlOld = encodeURI(urlOld)
  }
  return (urlOld)
}

cryptojs.HmacAuth = function (param) {
  let { access_token, mac_key, method, uri, host, server_time, local_time } = param
  let rtnArray = []
  let sbRawMac = []
  let dateNowServer = server_time && local_time ? new Date().getTime() + (server_time - local_time) : new Date().getTime()
  let nonce = [dateNowServer, ':', cryptojs.lib.WordArray.random(4)].join('')

  sbRawMac.push(nonce)
  sbRawMac.push('\n')
  sbRawMac.push(method.toUpperCase())
  sbRawMac.push('\n')
  sbRawMac.push(cryptojs.HttpUrlFormat(uri, undefined, method))
  sbRawMac.push('\n')
  sbRawMac.push(host)
  sbRawMac.push('\n')
  rtnArray.push('MAC id="')
  rtnArray.push(access_token)
  rtnArray.push('",nonce="')
  rtnArray.push(nonce)
  rtnArray.push('",mac="')
  rtnArray.push(cryptojs.enc.Base64.stringify(cryptojs.HmacSHA256(sbRawMac.join(''), mac_key)))
  rtnArray.push('"')
  return rtnArray.join('')
}

export default cryptojs
