# Conescencia
Separación del conocimiento entre módulos.

## Contexto
Tenemos un módulo de notas que según el tipo de usuario debe mostrar todas las notas o sólo las notas públicas.

Para evitar que el módulo de notas tenga conocimiento de los tipos de usuario existentes y las condiciones para mostrar unas u otras, el módulo notas debe ser agnóstico y recibir todos los filtros desde el contexto desde el que se le llama.

De ese modo, tendremos un contexto para los usuarios tipo colaborador y otro para los usuarios internos, y será este contexto el que llamará con las condiciones adecuadas al módulo de notas.

## Módulos

- Notas
- Área de colaboradores: pueden ver sólo las notas públicas y no pueden cerrarlas
- Área de usuarios: pueden ver todas las notas y cerrarlas

## Puesta en marcha

Necesitarás nodejs instalado en tu sistema.

```bash
npm install
npm start
```

## Tests
```bash
npm test
```

## Endpoints

- /partner-area/notes: debe devolver únicamente las notas públicas
- /partner-area/notes/1: debe devolver error 401
- /users-area/notes: debe devolver todas las notas
- /users-area/notes/1: debe devolver status 200