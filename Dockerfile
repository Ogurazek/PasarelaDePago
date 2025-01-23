# 1. Imagen base con Node.js
FROM node:18

# 2. Directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiar package.json y package-lock.json
COPY package.json package-lock.json ./

# 4. Instalar dependencias
RUN npm install

# 5. Copiar el resto del proyecto
COPY . .

# 6. Exponer el puerto 5173 (el puerto por defecto de Vite)
EXPOSE 5173

# 7. Comando para iniciar el servidor de desarrollo de Vite
CMD ["npm", "run", "dev"]

# Vite maneja las conexiones de una manera diferente a la que docker necesita
# entonces lo que debemos de hacer es ir al Package.json e ir a 
# "scripts": {
#    "dev": "vite --host"
#    } 
# y escribir exactamente lo que dice ahí... por defecto, estara en "vite"

# una vez hecho esto, toca construir la imagen: 
    # docker build -t (nombre) .

# Ejecutar contenedor 
    # docker run -d -p 5173:5173 (Con el nombre que pusimos anteriormente)

    # Decidi no usar el compose aquí porque lo considero innecesario