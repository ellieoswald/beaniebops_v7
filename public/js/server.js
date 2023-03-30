var http = require('http');
    fs = require('fs');

const port = 1337;


function serveStaticFile(response, path, contentType, responseCode) {
    if (!responseCode) {
        responseCode = 200;
    }


    fs.readFile(`${__dirname}${path}`, (error, data) => {
        if (error) {
            response.writeHead(500, {
                "Content-Type": "text/plain"
            });


            response.end("500 - Internal Error");
        } else {
            response.writeHead(responseCode, {
                "Content-Type": contentType
            });


            response.end(data);
        }
    });
}


http.createServer((request, response) => {

    const path = request.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();

    switch(path) {

      case "":
          serveStaticFile(response, "/public/index.html", "text/html");
          break;


      case "/artists":
          serveStaticFile(response, "/public/artists.html", "text/html");
          break;

      case "/songs":
          serveStaticFile(response, "/public/songs.html", "text/html");
          break;


      case "/genres":
          serveStaticFile(response, "/public/genres.html", "text/html");
          break;


      case "/css/style.css":
          serveStaticFile(response, "/public/css/style.css", "text/css");
          break;


      case "/images/404bottom.jpg":
          serveStaticFile(response, "/public/images/404bottom.jpg", "image/jpg");
          break;


      case "/images/404mid.gif":
          serveStaticFile(response, "/public/images/404mid.gif", "image/gif");
          break;


      case "/images/404top_w.jpg":
          serveStaticFile(response, "/public/images/404top_w.jpg", "image/jpg");
          break;


      case "/images/beaniebops.png":
          serveStaticFile(response, "/public/images/beaniebops.png", "image/png");
          break;


      case "/images/black-veil-brides.jpeg":
          serveStaticFile(response, "/public/images/black-veil-brides.jpeg", "image/jpeg");
          break;

      case "/images/five-finger-death-punch.jpeg":
          serveStaticFile(response, "/public/images/five-finger-death-punch.jpeg", "image/jpeg");
          break;

      case "/images/heavy-metal.jpeg":
          serveStaticFile(response, "/public/images/heavy-metal.jpeg", "image/jpeg");
          break;

      case "/images/kelsey.jpg":
          serveStaticFile(response, "/public/images/kelsey.jpg", "image/jpg");
          break;

      case "/images/rap.jpeg":
          serveStaticFile(response, "/public/images/rap.jpeg", "image/jpeg");
          break;

      case "/images/volbeat.jpeg":
          serveStaticFile(response, "/public/images/volbeat.jpeg", "image/jpeg");
          break;

      default:
          serveStaticFile(response, "/public/404.html", "text/html");
          break;
  }
}).listen(port);


console.log(`Server started on http://localhost:${port}`);
