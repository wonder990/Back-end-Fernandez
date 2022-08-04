const fs = require('fs')

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Contenedor {
  constructor(nombreArchivo) {
    this.nombreArchivo = nombreArchivo;
  }

  async getData() {
    try {
      return JSON.parse(await fs.promises.readFile(this.nombreArchivo, 'utf-8'))
    } catch (error) {
      if (error.code == 'ENOENT') {
        fs.writeFile(this.nombreArchivo, '[]', (error) => {
          if (error) {
            console.log('El archivo no pudo ser creado')
          }
        })
      }
    }
  }

  async getAll() {
    return await this.getData()
  }

  async getRandom() {
    const data = await this.getData()

    const randomIndex = randomInteger(0, data.length)
    
    return data[randomIndex]
  }
}

module.exports = { Contenedor }
