// filename: parse-url.mjs or set "type": "module" in package.json

// import { parse } from 'url';

// const myUrl = 'https://example.com:8080/path?search=test#hash';
// const parsedUrl = parse(myUrl);

// console.log('Hostname:', parsedUrl.hostname); // example.com
// console.log('Port:', parsedUrl.port);         // 8080
// console.log('Path:', parsedUrl.pathname);     // /path
// console.log('Query:', parsedUrl.query);       // search=test
// console.log('Hash:', parsedUrl.hash);         // #hash


import http from 'http';
import { parse } from 'path';
import url from 'url';

import { queryObjects } from 'v8';

const data =[
    {id:1,name:"yashswi",role:"student"},
    {id:2,name:"abc",role:"professor"}
]

const server = http.createServer((req,res)=>{
    const {pathname, query} = url.parse(req.url,true);
   if(req.method == 'GET'){
    if (pathname === '/user' && query.id) {
            const user = data.find(u => u.id === parseInt(query.id));
            const response = user || { message: 'User not found' };
            res.writeHead(user ? 200 : 404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(response));
            return;
        }
     if (pathname === '/user') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
            return;
        }
   }
   res.writeHead(404,{"content-type":"text/plain"});
   res.end("Route not found;")

})

server.listen(3000,()=>{
    console.log(`Server is running on ${3000}`);
})