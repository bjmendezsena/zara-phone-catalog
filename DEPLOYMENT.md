# Configuración de Modos de Desarrollo y Producción

## Modos Disponibles

### 🛠️ Modo Desarrollo

Sirve los assets sin minimizar para facilitar el debugging y desarrollo.

**Características:**

- Assets sin minimizar
- Archivos separados (no concatenados)
- Source maps detallados
- Recarga en caliente (Hot Reload)
- Optimizaciones de desarrollo

**Comandos:**

```bash
# Modo desarrollo estándar
npm run dev

# Modo desarrollo con inspector para debugging
npm run dev:debug

# Iniciar servidor en modo desarrollo
npm run start:dev
```

### 🚀 Modo Producción

Sirve los assets concatenados y minimizados para optimizar el rendimiento.

**Características:**

- Assets concatenados y minimizados
- Compresión habilitada
- Optimizaciones de CSS
- Tree shaking
- Code splitting optimizado

**Comandos:**

```bash
# Build para producción
npm run build

# Build con análisis de bundle
npm run build:analyze

# Iniciar servidor de producción
npm run start
```

## Variables de Entorno

- `NODE_ENV=development`: Activa el modo desarrollo
- `NODE_ENV=production`: Activa el modo producción
- `ANALYZE=true`: Habilita análisis de bundle (con build:analyze)
- `NEXT_DEBUG=true`: Habilita logs de debug adicionales

## Verificación de Modos

### En Desarrollo

- Los archivos JavaScript no están minimizados
- Se pueden ver en DevTools archivos separados
- Source maps disponibles para debugging

### En Producción

- Archivos JavaScript minimizados y concatenados
- Menos archivos en el bundle final
- Mejor rendimiento de carga
