# Aplicación Android

La app Android está creada con Capacitor y usa la versión publicada del portal:

https://proyecto-abp-inclusivo.onrender.com

## Requisitos para compilar APK

1. Instalar Android Studio.
2. Instalar un JDK compatible desde Android Studio o desde Eclipse Temurin.
3. Configurar `JAVA_HOME` y Android SDK en el sistema.

## Comandos

```bash
npm run android:sync
npm run android:open
npm run android:build
```

El APK debug se genera en:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

## Funcionamiento actual

La app abre el portal publicado en Render dentro de un contenedor nativo Android.
El diccionario de Lengua de Señas Colombiana se conserva con los datos e imágenes
que ya tiene el sitio web.

## Siguiente mejora sugerida

Para uso sin conexión, migrar el diccionario a una base local SQLite o a un JSON
precargado dentro de la app y sincronizarlo con la versión web cuando haya internet.
