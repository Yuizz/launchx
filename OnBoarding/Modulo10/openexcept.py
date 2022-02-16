def main():
  try:
    configuration = open('config.txt')
  except FileNotFoundError:
    print("No se pudo abrir el archivo config.txt!")
  except  IsADirectoryError:
    print("Se encontró config.txt, pero es un directorio no se puede leer")
  except (BlockingIOError, TimeoutError):
    print("El archivo tardó demasiado tiempo en abrirse o es muy pesado!")

if __name__ == '__main__':
  main()