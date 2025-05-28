<?php
// track.php

// Leer los datos JSON
$data = json_decode(file_get_contents("php://input"), true);

// Guardar como texto (puedes adaptarlo a base de datos si lo prefieres)
$log = date("Y-m-d H:i:s") . " | " . json_encode($data) . PHP_EOL;
file_put_contents("logs/visitas.txt", $log, FILE_APPEND);

// Responder con éxito
http_response_code(200);
echo json_encode(["status" => "ok"]);
