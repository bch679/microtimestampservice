function dateHandler (str) {
  var date = new Date(decodeURI(str));
  if (date.getTime()){
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return {'unix': date.getTime(), 'natural': months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()};
  }
  else {
    date = new Date(parseInt(decodeURI(str)));
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return {'unix': date.getTime(), 'natural': months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()};
  }
}


module.exports = dateHandler;
