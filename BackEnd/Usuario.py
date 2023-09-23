class Usuario:
    def __init__(self, id, username, contraseña, fecha_registro, nombre, dni, domicilio, rol):
        self.__id = id
        self.__username = username
        self.__contraseña = contraseña
        self.fecha_registro = fecha_registro
        self.nombre = nombre
        self.dni = dni
        self.domicilio = domicilio
        self.__rol = rol
        

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
        # implementacion del metodo
        pass

    def mostrar_usuario(self):
        # implementacion del metodo
        pass

    def eliminar_usuario(self):
        # implementacion del metodo
        pass

    def modificar_usuario():
        # implementacion del metodo
        pass
