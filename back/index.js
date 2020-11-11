let http = require('http'); //подгружаем http модуль

let server = http.createServer((req, res) => { //cоздаем сервер с callback функцией
    // console.log(req);
    //обработка ответа от сервера
    //принимаем запрос


    console.log('some request');
    let message = "Yo"
    res.write(`
    <h1>Ya startanul</h1>
    <script>
    // alert("${message}");
    </script>
    
    `); // тестовый ответ пользователю от сервака

    res.end();
});
server.listen(30005);