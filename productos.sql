CREATE DATABASE IF NOT EXISTS natura;

USE natura;

CREATE TABLE IF NOT EXISTS productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  descripcion TEXT,
  categoria VARCHAR(50),
  precio DECIMAL(10,2),
  imagen VARCHAR(255)
);

INSERT INTO productos (nombre, descripcion, categoria, precio, imagen) VALUES
('Base Líquida', 'Base hidratante tono medio', 'Maquillaje', 3500.00, 'https://example.com/base.jpg'),
('Crema de noche', 'Nutre la piel mientras dormís', 'Cuidado de la piel', 4200.00, 'https://example.com/crema.jpg'),
('Labial Mate', 'Color intenso y duradero', 'Maquillaje', 2100.00, 'https://example.com/labial.jpg'),
('Tónico Facial', 'Refresca y prepara la piel', 'Cuidado de la piel', 2800.00, 'https://example.com/tonico.jpg'),
('Sombra Compacta', 'Colores vibrantes', 'Maquillaje', 3300.00, 'https://example.com/sombra.jpg');
