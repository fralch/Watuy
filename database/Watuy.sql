-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: watuy
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carrito_compras`
--

DROP TABLE IF EXISTS `carrito_compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carrito_compras` (
  `id_carrito` bigint unsigned NOT NULL AUTO_INCREMENT,
  `id_usuario` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_carrito`),
  KEY `carrito_compras_id_usuario_foreign` (`id_usuario`),
  CONSTRAINT `carrito_compras_id_usuario_foreign` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrito_compras`
--

LOCK TABLES `carrito_compras` WRITE;
/*!40000 ALTER TABLE `carrito_compras` DISABLE KEYS */;
/*!40000 ALTER TABLE `carrito_compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comparaciones_productos`
--

DROP TABLE IF EXISTS `comparaciones_productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comparaciones_productos` (
  `id_comparacion` bigint unsigned NOT NULL AUTO_INCREMENT,
  `id_usuario` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_comparacion`),
  KEY `comparaciones_productos_id_usuario_foreign` (`id_usuario`),
  CONSTRAINT `comparaciones_productos_id_usuario_foreign` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comparaciones_productos`
--

LOCK TABLES `comparaciones_productos` WRITE;
/*!40000 ALTER TABLE `comparaciones_productos` DISABLE KEYS */;
/*!40000 ALTER TABLE `comparaciones_productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalles_carrito`
--

DROP TABLE IF EXISTS `detalles_carrito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detalles_carrito` (
  `id_detalle_carrito` bigint unsigned NOT NULL AUTO_INCREMENT,
  `id_carrito` bigint unsigned NOT NULL,
  `id_producto` bigint unsigned NOT NULL,
  `cantidad` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_detalle_carrito`),
  KEY `detalles_carrito_id_carrito_foreign` (`id_carrito`),
  KEY `detalles_carrito_id_producto_foreign` (`id_producto`),
  CONSTRAINT `detalles_carrito_id_carrito_foreign` FOREIGN KEY (`id_carrito`) REFERENCES `carrito_compras` (`id_carrito`) ON DELETE CASCADE,
  CONSTRAINT `detalles_carrito_id_producto_foreign` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalles_carrito`
--

LOCK TABLES `detalles_carrito` WRITE;
/*!40000 ALTER TABLE `detalles_carrito` DISABLE KEYS */;
/*!40000 ALTER TABLE `detalles_carrito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalles_comparaciones`
--

DROP TABLE IF EXISTS `detalles_comparaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detalles_comparaciones` (
  `id_detalle_comparacion` bigint unsigned NOT NULL AUTO_INCREMENT,
  `id_comparacion` bigint unsigned NOT NULL,
  `id_producto` bigint unsigned NOT NULL,
  `notas` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_detalle_comparacion`),
  KEY `detalles_comparaciones_id_comparacion_foreign` (`id_comparacion`),
  KEY `detalles_comparaciones_id_producto_foreign` (`id_producto`),
  CONSTRAINT `detalles_comparaciones_id_comparacion_foreign` FOREIGN KEY (`id_comparacion`) REFERENCES `comparaciones_productos` (`id_comparacion`) ON DELETE CASCADE,
  CONSTRAINT `detalles_comparaciones_id_producto_foreign` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalles_comparaciones`
--

LOCK TABLES `detalles_comparaciones` WRITE;
/*!40000 ALTER TABLE `detalles_comparaciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `detalles_comparaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalles_pedidos`
--

DROP TABLE IF EXISTS `detalles_pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detalles_pedidos` (
  `id_detalle_pedido` bigint unsigned NOT NULL AUTO_INCREMENT,
  `id_pedido` bigint unsigned NOT NULL,
  `id_producto` bigint unsigned NOT NULL,
  `cantidad` int DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_detalle_pedido`),
  KEY `detalles_pedidos_id_pedido_foreign` (`id_pedido`),
  KEY `detalles_pedidos_id_producto_foreign` (`id_producto`),
  CONSTRAINT `detalles_pedidos_id_pedido_foreign` FOREIGN KEY (`id_pedido`) REFERENCES `pedidos` (`id_pedido`) ON DELETE CASCADE,
  CONSTRAINT `detalles_pedidos_id_producto_foreign` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalles_pedidos`
--

LOCK TABLES `detalles_pedidos` WRITE;
/*!40000 ALTER TABLE `detalles_pedidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `detalles_pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `filtros`
--

DROP TABLE IF EXISTS `filtros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `filtros` (
  `id_filtro` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipo_input` enum('range','checkbox','select','radio') COLLATE utf8mb4_unicode_ci NOT NULL,
  `unidad` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `descripcion` text COLLATE utf8mb4_unicode_ci,
  `orden` int NOT NULL DEFAULT '0',
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `obligatorio` tinyint(1) NOT NULL DEFAULT '0',
  `max_value` decimal(15,2) DEFAULT NULL,
  `min_value` decimal(15,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_filtro`),
  KEY `filtros_activo_orden_index` (`activo`,`orden`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filtros`
--

LOCK TABLES `filtros` WRITE;
/*!40000 ALTER TABLE `filtros` DISABLE KEYS */;
/*!40000 ALTER TABLE `filtros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marcas`
--

DROP TABLE IF EXISTS `marcas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marcas` (
  `id_marca` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `imagen` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `video_url` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_marca`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marcas`
--

LOCK TABLES `marcas` WRITE;
/*!40000 ALTER TABLE `marcas` DISABLE KEYS */;
INSERT INTO `marcas` VALUES (1,'Caterpillar','-','/img/marcas/caterpillar.jpg',NULL,'2025-10-03 01:33:27','2025-10-03 01:33:27'),(2,'Komatsu','-','/img/marcas/komatsu.jpg',NULL,'2025-10-03 01:33:49','2025-10-03 01:33:49'),(3,'John Deere','-','/img/marcas/john_deere.jpg',NULL,'2025-10-03 01:34:28','2025-10-03 01:53:16'),(4,'Hitachi','-','/img/marcas/hitachi.jpg',NULL,'2025-10-03 01:36:22','2025-10-03 01:36:22'),(7,'Volvo',NULL,'/img/marcas/volvo.jpg',NULL,'2025-11-01 18:05:45','2025-11-01 18:05:45');
/*!40000 ALTER TABLE `marcas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `media`
--

DROP TABLE IF EXISTS `media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `media` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint unsigned NOT NULL,
  `uuid` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `collection_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mime_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `disk` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `conversions_disk` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `size` bigint unsigned NOT NULL,
  `manipulations` json NOT NULL,
  `custom_properties` json NOT NULL,
  `generated_conversions` json NOT NULL,
  `responsive_images` json NOT NULL,
  `order_column` int unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `media_uuid_unique` (`uuid`),
  KEY `media_model_type_model_id_index` (`model_type`,`model_id`),
  KEY `media_order_column_index` (`order_column`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `media`
--

LOCK TABLES `media` WRITE;
/*!40000 ALTER TABLE `media` DISABLE KEYS */;
/*!40000 ALTER TABLE `media` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (15,'0001_01_01_000000_create_users_table',1),(16,'2025_01_07_224910_create_usuarios_table',1),(17,'2025_01_07_224916_create_categorias_table',1),(18,'2025_01_07_224926_create_subcategorias_table',1),(19,'2025_01_07_225008_create_pedidos_table',1),(20,'2025_01_16_165507_create_marcas_table',1),(21,'2025_01_16_171127_create_marca_categoria_table',1),(22,'2025_01_16_224953_create_productos_table',1),(23,'2025_01_16_225008_create_detalles_pedidos_table',1),(24,'2025_01_16_225047_create_carrito_compras_table',1),(25,'2025_01_16_225104_create_detalles_carrito_table',1),(26,'2025_01_16_225114_create_comparaciones_productos_table',1),(27,'2025_01_16_225135_create_detalles_comparaciones_table',1),(28,'2025_01_17_000000_modify_imagen_column_in_productos_table',1),(29,'2025_01_19_000000_create_filtros_table',1),(30,'2025_01_20_000000_add_max_min_value_to_filtros_table',1),(31,'2025_03_12_010244_add_especificaciones_tecnicas_to_productos_table',1),(32,'2025_04_02_223657_create_producto_relaciones_table',1),(33,'2025_04_10_124858_create_tipos_relacion_productos_table',1),(34,'2025_04_20_112603_add_img_column_to_categorias',1),(35,'2025_04_21_214756_add_img_to_subcategorias_table',1),(36,'2025_04_25_000001_create_tipos_filtros_table',2),(37,'2025_04_25_000002_modify_slug_column_in_filtros_table',2),(38,'2025_06_14_181029_migrate_datos_tecnicos_to_especificaciones_tecnicas',2),(39,'2025_06_14_182114_add_datos_tecnicos_column',2),(40,'2025_06_16_194131_add_video_url_to_marcas_table',2),(41,'2025_06_16_194143_update_marcas_with_videos',2),(42,'2025_06_19_220000_poblar_tabla_marca_categoria',2),(43,'2025_07_12_000000_add_video_column_to_categorias_table',2),(44,'2025_07_15_120000_alter_productos_table',2),(45,'2025_08_04_203035_create_media_table',2),(46,'2025_08_08_000000_migrate_existing_category_images',2),(47,'2025_11_01_092815_drop_categorias_and_subcategorias_tables',3);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `opciones_filtros`
--

DROP TABLE IF EXISTS `opciones_filtros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `opciones_filtros` (
  `id_opcion` bigint unsigned NOT NULL AUTO_INCREMENT,
  `id_filtro` bigint unsigned NOT NULL,
  `valor` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `etiqueta` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(7) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `orden` int NOT NULL DEFAULT '0',
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_opcion`),
  KEY `opciones_filtros_id_filtro_activo_orden_index` (`id_filtro`,`activo`,`orden`),
  CONSTRAINT `opciones_filtros_id_filtro_foreign` FOREIGN KEY (`id_filtro`) REFERENCES `filtros` (`id_filtro`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `opciones_filtros`
--

LOCK TABLES `opciones_filtros` WRITE;
/*!40000 ALTER TABLE `opciones_filtros` DISABLE KEYS */;
/*!40000 ALTER TABLE `opciones_filtros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `id_pedido` bigint unsigned NOT NULL AUTO_INCREMENT,
  `id_usuario` bigint unsigned NOT NULL,
  `monto_total` decimal(10,2) NOT NULL,
  `fecha_pedido` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `estado` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pendiente',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_pedido`),
  KEY `pedidos_id_usuario_foreign` (`id_usuario`),
  CONSTRAINT `pedidos_id_usuario_foreign` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto_relaciones`
--

DROP TABLE IF EXISTS `producto_relaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto_relaciones` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `producto_id` bigint unsigned NOT NULL,
  `relacionado_id` bigint unsigned NOT NULL,
  `tipo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `producto_relaciones_producto_id_foreign` (`producto_id`),
  KEY `producto_relaciones_relacionado_id_foreign` (`relacionado_id`),
  CONSTRAINT `producto_relaciones_producto_id_foreign` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id_producto`) ON DELETE CASCADE,
  CONSTRAINT `producto_relaciones_relacionado_id_foreign` FOREIGN KEY (`relacionado_id`) REFERENCES `productos` (`id_producto`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto_relaciones`
--

LOCK TABLES `producto_relaciones` WRITE;
/*!40000 ALTER TABLE `producto_relaciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `producto_relaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id_producto` bigint unsigned NOT NULL AUTO_INCREMENT,
  `sku` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `marca_id` bigint unsigned NOT NULL,
  `pais` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `precio_sin_ganancia` decimal(10,2) DEFAULT NULL,
  `precio_ganancia` decimal(10,2) DEFAULT NULL,
  `precio_igv` decimal(10,2) DEFAULT NULL,
  `descripcion` text COLLATE utf8mb4_unicode_ci,
  `video` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `envio` longtext COLLATE utf8mb4_unicode_ci,
  `soporte_tecnico` longtext COLLATE utf8mb4_unicode_ci,
  `caracteristicas` json DEFAULT NULL,
  `especificaciones_tecnicas` longtext COLLATE utf8mb4_unicode_ci,
  `datos_tecnicos` json DEFAULT NULL,
  `archivos_adicionales` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `imagen` json DEFAULT NULL,
  PRIMARY KEY (`id_producto`),
  KEY `productos_marca_id_foreign` (`marca_id`),
  CONSTRAINT `productos_marca_id_foreign` FOREIGN KEY (`marca_id`) REFERENCES `marcas` (`id_marca`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (3,'faaewf3123','Maquina XXXXX',1,'Chile',3334.00,4220.25,4979.90,'aefaewfawe','https://youtu.be/BIXZHS6Gm9A?si=DepF1-olYLvE3_f7','fawefaewf','awefewa','{\"Alto\": \"1,3m\", \"Ancho\": \"2m\", \"Color\": \"Azul\", \"Largo\": \"3m\"}','{\"secciones\":[{\"tipo\":\"texto\",\"datos\":[\"Pega una tabla desde Excel, PDF, o de cualquier página web. También puedes ingresar texto simple y combinar múltiples t\"]}],\"textoActual\":\"\"}',NULL,'\"https://ejemplo.com/manual.pdf\"','2025-11-04 03:29:32','2025-11-04 03:29:32','[\"productos/1762226972_0.jpg\"]'),(4,'234faew08484032','faewf',1,'Alemania',3444.00,4472.73,5277.82,'fawefaew','https://youtu.be/BIXZHS6Gm9A?si=DepF1-olYLvE3_f7',NULL,NULL,'[]',NULL,NULL,NULL,'2025-11-06 20:45:53','2025-11-06 20:45:53','[\"http://127.0.0.1:8000/img/IMAGENES_ALQUILER DE MAQUINARIA PESADA/Minicargador_CAT_246D3.jpg\"]');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipos_relacion_productos`
--

DROP TABLE IF EXISTS `tipos_relacion_productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipos_relacion_productos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipos_relacion_productos`
--

LOCK TABLES `tipos_relacion_productos` WRITE;
/*!40000 ALTER TABLE `tipos_relacion_productos` DISABLE KEYS */;
INSERT INTO `tipos_relacion_productos` VALUES (1,'accesorio','Accesorios generales',NULL,NULL),(2,'suministro','Suministros generales',NULL,NULL),(3,'otro','Otras relaciones',NULL,NULL),(4,'insumos y consumibles','Productos consumibles y suministros',NULL,NULL),(5,'productos relacionados','Productos con alguna relación',NULL,NULL),(6,'productos vistos recientemente','Historial de productos visualizados',NULL,NULL),(7,'productos que utilizan estos accesorios','Productos compatibles con estos accesorios',NULL,NULL),(8,'productos que utilizan estos insumos','Productos que usan estos consumibles',NULL,NULL);
/*!40000 ALTER TABLE `tipos_relacion_productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_usuario` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nombre_usuario` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contraseña` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `correo` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nombre` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `apellido` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `direccion` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telefono` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'fralch','$2y$12$lbFafkKg4QE4lE3pj6YzL.gVAH1Qt5NVwQqUVJmqepbdDHS.z/76q','ingfralch@gmail.com','Frank Cairampoma',NULL,NULL,NULL,'2025-10-03 01:22:11','2025-10-03 01:22:11');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'watuy'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-11-06 16:20:53
