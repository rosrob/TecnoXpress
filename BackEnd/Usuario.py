import BBDD
import datetime
import Decoradores

class Usuario:
    def __init__(self,):
        self.__id = id
        self.__username = ""
        self.__contraseña = ""
        self.fecha_registro = ""
        self.nombre = ""
        self.dni = ""
        self.domicilio = ""
        
        

    @property
    def id(self):
        return self.__id
    
    @property
    def username(self):
        return self.__username
    
    @property
    def contraseña(self):
        return self.__contraseña
    
    @contraseña.setter
    def contraseña(self, nueva_contraseña):
        self.__contraseña = nueva_contraseña

    @property
    def fecha_registro(self):
        return self._fecha_registro
    
    @fecha_registro.setter
    def fecha_registro(self, nueva_fecha_registro):
        self.__fecha_registro = nueva_fecha_registro

    @property
    def nombre(self):
        return self._nombre
    
    @nombre.setter
    def nombre(self, nuevo_nombre):
        self.__nombre = nuevo_nombre
    
    @property
    def dni(self):
        return self._dni
    
    @dni.setter
    def dni(self, nuevo_dni):
        self.__dni = nuevo_dni
    
    @property
    def domicilio(self):
        return self._domicilio
    
    @domicilio.setter
    def domicilio(self, nuevo_domicilio):
        self.__domicilio = nuevo_domicilio
    
    @property
    def rol(self):
        return self.__rol
    
    @rol.setter
    def rol(self, nuevo_rol):
        self.__rol = nuevo_rol
    
    def cargar_usuario(self):
        # Iniciamos la base de datos
            conexion = BBDD.BaseDeDatos("localhost", "root", "Franco4567", "tecnoxpress","3306")
            cursor = conexion.cursor()
            
            aux = True
            while aux:
                usuario = input ("Ingrese un nombre de usuario: ")
                # Ver si el usuario es unico
                consulta = "SELECT username FROM usuarios WHERE username = %s"
                valor = (usuario,)
                cursor.execute (consulta,valor)
                resultado_consulta = cursor.fetchone()
                if (resultado_consulta != usuario):
                    print("Este usuario no existe")
                    aux = False
                else:
                    print ("Este usuario ya existe, intente nuevamente")
                
            contraseña = input ("ingrese una contraseña: ")
            nombre = input ("Ingrese su nombre: ")
            apellido = input ("Ingrese su apellido: ")
            dni = int(input ("Ingrese su D.N.I.: "))
            fecha_de_nacimiento = input ("Ingrese su fecha de nacimiento en formato dd/mm/aaaa : ")
            fecha_de_nacimiento = datetime.datetime.strptime(fecha_de_nacimiento, '%d/%m/%Y').strftime('%Y-%m-%d')
            direccion = input ("Ingrese su direccion: ")
            localidad = input ("Ingrese su localidad: ")
            provincia = input ("ingrese su provincia: ")
            codigo_postal= input ("Ingrese su codigo postal: ")
            nro_telefonico = int(input ("Ingrese su numero de telefono: "))
            email = input ("Ingrese su email.com: ")
            fecha_registro = datetime.date.today()
            while True:
                print ("Usted es: \n 1- Cliente \ 2- Administrador")
                opcion = int(input(Decoradores.opcion))
                if (opcion == 1 or opcion == 2):
                    if opcion == 1:
                        rol = "cliente"
                        break
                        
                    elif opcion == 2:
                        contraseña_admin = "admin"
                        contraseña_entrada= input ("Ingrese el codigo proporcionado por la empresa: ")
                        if contraseña_admin == contraseña_entrada:
                            rol = "administrador"
                            break
                        else:
                            print ("Codigo incorrecto, sera designado como cliente")
                            rol = "cliente"
                            break    
                else:
                    print(Decoradores.erroneo)
            
            
            # Consulta SQL para insertar datos en la tabla "usuarios"
            consulta_usuarios = "INSERT INTO usuarios (username, contraseña, nombre, apellido, dni, fecha_de_nacimiento, direccion, fecha_registro, nro_telefonico, email) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
            valores_usuarios = (usuario, contraseña, nombre, apellido, dni, fecha_de_nacimiento, direccion, fecha_registro, nro_telefonico, email)

            # Consulta SQL para insertar datos en la tabla "codigo_postal"
            consulta_codigo_postal = "INSERT INTO codigo_postal (id_usuarios, codigo_postal, localidad, provincia) VALUES (LAST_INSERT_ID(), %s, %s, %s)"
            valores_codigo_postal = (codigo_postal, localidad, provincia)
            
            
            
            # Ejecutar la consulta de "usuarios" y luego la de "codigo_postal" 
            cursor.execute(consulta_usuarios, valores_usuarios)
            cursor.execute(consulta_codigo_postal, valores_codigo_postal)
            
            # Consulta SQL para encontrar el id en la tabla roles 
            consulta = ("SELECT id_roles FROM roles WHERE rol = %s")
            valor= (rol,)
            cursor.execute(consulta,valor)
            # Recupera el id de roles
            resultado = cursor.fetchone()
            id_cliente = resultado[0]
            
            # Consulta SQL para encontrar el id en la tabla usuario 
            consulta = ("SELECT id_usuarios FROM usuarios WHERE  username = %s")
            valor = (usuario,)
            cursor.execute(consulta,valor)
            # Recupera el id de usuario
            resultado = cursor.fetchone()
            id_usuario = resultado[0]
            
            # Consulta SQL para insertar datos en la tabla "usuario_roles"
            consulta_usuario_roles = "INSERT INTO usuario_roles (id_usuarios, id_roles) VALUES (%s, %s)"
            valores_usuario_roles = (id_usuario,id_cliente)

            # Ejecutar la consulta de "usuario_roles"
            cursor.execute(consulta_usuario_roles, valores_usuario_roles)

            # Confirmar los cambios en la base de datos
            conexion.confirmar_cambios()

            # Cerrar la conexión a la base de datos
            conexion.cerrar_base()

            print("Usuario registrado exitosamente")
                
    def mostrar_usuario(self):
        # implementacion del metodo
        pass

    def eliminar_usuario(self):
        # implementacion del metodo
        pass

    def modificar_usuario():
        # implementacion del metodo
        pass
    
    def inicio_usuario (self,usuario_registrado,contraseña):
        contador = 0
        while (self.contador > 3):
            # Iniciamos la base de datos
            conexion = BBDD.BaseDeDatos("localhost", "root", "Franco4567", "tecnoxpress","3306")
            cursor = conexion.cursor()
            
            
            usuario_registrado = input ("Ingrese su usuario: ")
            contraseña = input ("ingrese la contraseña: ")
            # Consultar la base de datos para verificar las credenciales
            consulta = "SELECT username, contraseña FROM usuarios WHERE username = %s AND contraseña = %s"
            valores = (usuario_registrado, contraseña)
            cursor.execute(consulta, valores)
            resultado_consulta = cursor.fetchone()
            
            if resultado_consulta == usuario_registrado and contraseña:
                print("Inicio de sesión exitoso. Bienvenido,", usuario_registrado)
                return
            
            print("Usuario o contraseña incorrectas. Inténtalo de nuevo.")
            contador += 1

        print("Has superado el número máximo de intentos. Cerrando la aplicación.")
        

        cursor.close()
        conexion.close()  