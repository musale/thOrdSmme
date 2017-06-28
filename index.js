import express from 'express';

const app = express();
const PORT = 3000;
app.use('/', (request, response)=>{
    response.send('Hello Docker Express')
});

app.listen(PORT, ()=>{
    console.log(`Up at PORT ${PORT}`);
});

