const schemaData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jose Armando Ramírez Alvarado",
  "jobTitle": "Desarrollador Web",
  "url": "https://tusitio.dev/",
  "sameAs": [
    "https://github.com/JoseArmando9715"
  ]
};

// Insertar dinámicamente en el head
const script = document.createElement('script');
script.type = "application/ld+json";
script.text = JSON.stringify(schemaData);
document.head.appendChild(script);
