var conn = new WebSocket('ws://localhost:8090');
conn.onopen = function(e) {
    console.log("Connection established!");
};
conn.onmessage = function(e) {
    console.log(e.data);
};
conn.onopen();


conn.onmessage(JSON.stringify({command: "message", to: "1", message: "it needs xss protection"}));
console.timeLog(conn.data);
