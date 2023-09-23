class Producto:
    def __init__(self, id, nombre, descripcion, precio, stock):
        self.__id = id  
        self.nombre = nombre
        self.descripcion = descripcion
        self.precio = precio
        self.stock = stock

    @property
    def id(self):
        return self.__id
    @id.setter
    def id(self, nuevo_id):
        self.__id = nuevo_id  
 
    def cargar_producto(self):
        pass

    def modificar_producto(self):
        pass

    def mostrar_producto(self):
        pass
    
    def eliminar_producto(self):
       pass
    
