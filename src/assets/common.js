export var headerObj = {
  token: '',
  platform: 1,
  appVersion: 0,
  cityId: 1,
  platformVersion: '1.0.0',
  deviceId: '',
  channel: '',
  protoVersion: '',
  isPreview: ''
}
export var url = ''
// export function formatDate (datevalue, flag) {
//   var date = new Date(datevalue)
//   var year = date.getFullYear()
//   var month = date.getMonth() + 1
//   var day = date.getDate()
//   var hour = date.getHours()
//   var minutes = date.getMinutes()
//   var seconds = date.getSeconds()
//   var str = year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day)
//   if (flag) {
//     str += ' ' + (hour < 10 ? '0' + hour : hour) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds)
//   }
//   return str
// }
// // 金额按财务格式显示
// export function formatmon (str) {
//   if (str) {
//     var flag = false
//     if (str >= 0) {
//       flag = false
//     } else {
//       flag = true
//     }
//     str = Math.abs(parseFloat(str)).toFixed(2) + ''
//
//     var alllen = str.length
//     var lastIndex
//     var arr = []
//     if (alllen) {
//       var bstr = str
//       var astr = ''
//       if (str.indexOf('.') >= 0) {
//         bstr = str.substr(0,str.indexOf ('.'));
//         astr = str.substr(str.indexOf ('.'));
//       }
//       var len = bstr.length;
//       while (len > 0) {
//         lastIndex = len;
//         len -= 3;
//         arr.unshift(str.substring(len, lastIndex));
//       }
//       return (flag?'-':'')+(arr.join(',') + astr);
//     } else {
//       return '0';
//     }
//   } else {
//     return '0';
//   }
// }
// var timer = setInterval(move, 3000);
// var index = 0;
// function move() {
//   index++;
//   if (index > 3) {
//     index = 1;
//     $('.noticeMessage').css('top', 0);
//   };
//   $('.noticeMessage').stop().animate({ top: -index * 30 }, 1000);
// }
//
