var Connection = require('tedious').Connection;
var config = {
    userName: 'kimngan',
    password: 'kimngan',
    server: '127.0.0.1',
    // If you are on Microsoft Azure, you need this:  
    options: { encrypt: true, database: 'SinhVien' }
};
var connection = new Connection(config);
connection.on('connect', function (err) {
    if (err)
    {
        console.log(err.message);
        return;
    }
    // If no error, then good to proceed.  
    console.log("Connected");
    executeStatement(); 
});

var Request = require("tedious").Request;
var TYPE = require('tedious').TYPES;

function executeStatement() {
    request = new Request("select * from ThongTin", (err,rowCount) => {
        if (err) {
            console.log(err.message);
            return;
        }
        console.log(rowCount + " rows");
        connection.close();
    });
    var result = "";
    request.on('row', function (columns) {
        columns.forEach(function (column) {
            if (column.value == null) {
                result += 'NULL   ';
            } else {
                result += column.value + "   ";
            }
        });
        console.log(result);
        result = '';
    });

    request.on('done', (rowCount,more, rows) => {
        console.log(rowCount + ' rows returned');
    });

    connection.on('end', (err) => {
        if (err) {
            console.log(err.message);
        }
        console.log("Connection close");
    })
    connection.execSql(request);
}