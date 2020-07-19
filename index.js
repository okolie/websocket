const express = require( "express" );
const socket = require( "socket.io" );
const app = express();
const port = 4000;





app.listen( port, () => console.log( `Server running on port ${ port }!` ) );

app.use( express.static( "public" ) );
