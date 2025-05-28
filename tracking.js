$(document).ready(function () {
  $.getJSON("https://get.geojs.io/v1/ip/geo.json", function (n) {
    // Objeto con datos de red y navegador
    const data = {
      ip: n.ip,
      country: n.country,
      region: n.region,
      city: n.city,
      provider: n.organization_name || "Desconocido",
      browser: navigator.userAgent,
      os: navigator.platform,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      referrer: document.referrer,
      currentUrl: window.location.href,
      connectionSpeed: navigator.connection ? navigator.connection.downlink : "Desconocido",
      geolocation: "No permitida"
    };

    // Intentar obtener ubicación exacta (solo si el usuario lo permite)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          data.geolocation = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
            accuracy: position.coords.accuracy
          };
          sendToServer(data);
        },
        function () {
          sendToServer(data); // Sin ubicación
        },
        { timeout: 5000 }
      );
    } else {
      sendToServer(data);
    }
  }).fail(function (error) {
    console.error("Error al obtener IP:", error);
  });

  function sendToServer(payload) {
    $.ajax({
      type: "POST",
      url: "track.php",
      contentType: "application/json",
      data: JSON.stringify(payload),
      success: function () {
        console.log("Datos enviados correctamente.");
      },
      error: function (error) {
        console.error("Error al enviar datos:", error);
      }
    });
  }
});
