function requestHandler(req,res)
{
    if (req.url == '/' && req.method.toLowerCase() == 'get')
    {
        console.log(req.url);
        res.writeHead(200,{ 'content-type': 'text/html'});
        res.write('hello\n');
       return res.end('proccess! completed');
    }else if(req.url == '/about' && req.method.toLowerCase() == 'get')
    {
        console.log(req.url);
        res.writeHead(404, { 'content-type': 'text/plain' });
         return res.end('page note found ! ');
    }
}
module.exports = requestHandler;

