const moment = require('moment'); //May have to go back and actually download moment

module.exports = {
  parse: (req, res) => {
    const date = req.params.query;
    let processedDate = {
      unix: null,
      natural: null
  };
    
    if(+date >= 0) {
      processedDate.unix = +date;
      processedDate.natural = moment.unix(+date).format('MMMM D, YYYY');
    }
    
    else if(isNaN(+date) && moment(date, 'MMMM D, YYYY').isValid()) {
      processedDate.unix = moment(date, 'MMMM D, YYYY').format('X');
      processedDate.natural = date;
    }
    
    res.send(processedDate);
  }
}