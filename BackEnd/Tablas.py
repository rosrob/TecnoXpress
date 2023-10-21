import os
import mysql.connector
from mysql.connector import Error

def crear_tablas():
  current_directory = os.path.dirname(os.path.realpath(__file__))

  # Ruta completa al archivo SQL
  sql_file_path = os.path.join(current_directory,'sql', 'SQL_TecnoXpress.sql')
  print (sql_file_path)
  try:
      # Configuración de la conexión a la base de datos
    config = {
        'host': 'localhost',
        'user': 'root',
        'password': 'Franco4567',
        'database': 'tecnoxpress',
    }
      # Conectar a la base de datos
    connection = mysql.connector.connect(**config)
    cursor = connection.cursor()

    with open(sql_file_path, 'r') as file:
          sql_script = file.read()

    with open(sql_file_path, 'r') as file:
          sql_statements = file.read().split(';')

    for statement in sql_statements:
          if statement.strip():
              cursor.execute(statement)


      # Confirmar los cambios en la base de datos
    connection.commit()
    print("Tablas creadas con éxito.")

  except Error as e:
      print(f"Error: {e}")

  finally:
      if connection:
          cursor.close()
          connection.close()
