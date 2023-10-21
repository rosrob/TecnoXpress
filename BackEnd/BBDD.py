import mysql.connector
import Tablas

class BaseDeDatos:
    
    def __init__(self,):
            self.host = "localhost"
            self.user = "root"
            self.password = "Franco4567"
            self.database = "tecnoxpress"
            self.port = 3306
    
    def base_de_datos_existe(self):
        try:
            conexion = mysql.connector.connect(
                host=self.host,
                user=self.user,
                password=self.password
            )
            cursor = conexion.cursor()
            cursor.execute("SHOW DATABASES")
            databases = [database[0] for database in cursor]
            return "tecnoxpress" in databases
        except mysql.connector.Error as err:
            print(f"Error: {err}")
            return False

    def crear_base_de_datos(self):
       
        conexion = mysql.connector.connect(
            host=self.host,
            user=self.user,
            password=self.password
        )
        cursor = conexion.cursor()
        cursor.execute("CREATE DATABASE tecnoxpress")
        print("Base de datos 'tecnoxpress' creada con éxito.")
        
         

    def abrir_base(self):
        # Conectarse a la base de datos
        self.conexion = mysql.connector.connect(
            host=self.host,
            user=self.user,
            password=self.password,
            database=self.database,
            port= self.port
        )
        return self.conexion
    
    # def abrir_base(self):
    #     # Conectarse a la base de datos
    #     self.conexion = mysql.connector.connect(
    #         host= "127.0.0.1",
    #         puerto = 3306 ,
    #         user="root",
    #         password= "Franco4567",
    #         database= "tecnoxpress")
    #     print ("conexion a dase de datos exitosa")
        
        return self.conexion

    def cursor(self):
        # Obtener un cursor para ejecutar consultas SQL
        self.base = self.abrir_base()
        self.cursor = self.base.cursor()
        return self.cursor

    def confirmar_cambios(self):
        # Confirmar los cambios en la base de datos
        self.base.commit()

    def cerrar_base(self):
        # Cerrar el cursor y la conexión a la base de datos
        if self.cursor:
            self.cursor.close()
        if self.base:
            self.base.close()

