const express = require('express');

const app = express();

app.get('/',(request, response) =>{
    //return response.send('Hello Word!');
    return response.json({   //se desejar configure o JSON Viewer para melhirar a visualização
        evento:'Semana omniStack 11.0',
        aluno: 'Regina Lacerda'
    });
});
app.listen(3333);
