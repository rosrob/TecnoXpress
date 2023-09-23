import mysql.connector

class ConexionMySQL:
    def __init__(self, host, user, password, database):
        self.host = host
        self.user = user
        self.password = password
        self.database = database

    def conectar(self):
        try:
            self.conexion = mysql.connector.connect(
                host=self.host,
                user=self.user,
                password=self.password,
                database=self.database
            )
            return self.conexion
        except mysql.connector.Error as e:
            print(e)
            return None

    def desconectar(self):
        if self.conexion:
            self.conexion.close()


if __name__ == "__main__":
    conexion = ConexionMySQL("localhost", "root", "password", "tecnoxpress")
    conexion = conexion.conectar()
    print(conexion)
    conexion.desconectar()
