import mysql.connector

class BaseDeDatos:
    def __init__(self, host, user, password, database,port):
        self.host = host
        self.user = user
        self.password = password
        self.database = database
        self.port = port
        

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

