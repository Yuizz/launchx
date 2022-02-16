def water_left(astronauts, water_left, days_left):
    for argument in [astronauts, water_left, days_left]:
      try:
        # If argument is an int, the following operation will work
        argument / 10
      except TypeError:
        # TypError will be raised only if it isn't the right type 
        # Raise the same exception but with a better error message
        raise TypeError(f"Todos los argumentos deben ser enteros, pero se recibio: '{argument}'")
    daily_usage = astronauts * 11
    total_usage = daily_usage * days_left
    total_water_left = water_left - total_usage
    if total_water_left < 0:
        raise RuntimeError(f"No hay suficiente agua para {astronauts} astronautas en {days_left} dias!")
    return f"Agua restantes despues de {days_left} dias es: {total_water_left} litros"


try:
  print(water_left(5, '100', 2))
except RuntimeError as err:
  print(err)