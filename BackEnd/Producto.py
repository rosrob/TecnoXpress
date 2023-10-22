import BBDD
import Decoradores

class Producto:
    def __init__(self):
        self.nombre = ""
        self.descripcion = ""
        self.precio = ""
        self.stock = ""
        self.id_categoria_productos = ""
        self.url_imagen = ""



    def agregar_producto(self):
        # Iniciamos la base de datos
        conexion = BBDD.BaseDeDatos()
        cursor = conexion.cursor()


        print("\n╔══════════════════════════════╗")
        print("║      Agregar Producto          ║")
        print("╚══════════════════════════════╝")
        
        nombre = input(' Por favor escriba el nombre del Producto: ')
        descripcion = input('Escriba una descripción del Producto: ')
        precio = float(input(' Introduce el precio del Producto (solo en digitos): '))
        stock = int(input('Introduzca la cantidad de stock del Producto (digitos): '))
        # id_categoria_productos = int(input('ID de la Categoría del Producto: '))
        url_imagen = input('URL de la Imagen del Producto: ')
        # producto = Producto( nombre, descripcion, precio, stock, id_categoria_productos, url_imagen)
        
        while True :
            print ("¿Que categoria es? \n 1- Mouses \n 2- Teclado \n 3- Monitores")
            opcion = int(input (Decoradores.opcion))
            if (opcion >= 1 and opcion <= 3):
                if opcion == 1:
                    categoria = "mouses"
                    break
                elif opcion == 2:
                    categoria = "teclado"
                    break
                elif opcion == 3 :
                    categoria = "monitores"
                    break
                    
            else:
                print(Decoradores.erroneo)

        consulta_categoria = "SELECT id_categoria_productos FROM categoria_productos WHERE tipo = %s "
        valor_categoria = (categoria,)
        cursor.execute (consulta_categoria,valor_categoria)
        resultado_categoria = cursor.fetchone ()
        
        # Consulta SQL para insertar datos en la tabla "usuarios"
        consulta_productos = "INSERT INTO productos (nombre, descripcion, imagen_url, precio, stock, id_categoria_productos ) VALUES (%s, %s, %s, %s, %s,%s)"
        valores_productos = (nombre, descripcion, url_imagen, precio, stock, resultado_categoria [0])
        cursor.execute(consulta_productos,valores_productos)
        
        # Confirmar los cambios en la base de datos
        conexion.confirmar_cambios()

        # Cerrar la conexión a la base de datos
        conexion.cerrar_base()
        
        
        print(f' El producto "{nombre}" se ha agregado correctamente.')


    def listar_productos(self):
        # Iniciamos la base de datos
        conexion = BBDD.BaseDeDatos()
        cursor = conexion.cursor()

        cursor.execute("SELECT id_productos, nombre, precio FROM productos ")
        resultado_productos = cursor.fetchall()

        print("\n╔══════════════════════════════╗")
        print("║       Lista de Productos       ║")
        print("╚══════════════════════════════╝")

        if resultado_productos is None or len(resultado_productos) == 0:
            print("Actualmente no hay productos disponibles.")
        else:
            for producto in resultado_productos:
                id_producto, nombre, precio = producto
                print(f'{id_producto}- {nombre}  $ {precio}')

        # Cierra la conexión a la base de datos
        conexion.cerrar_base()


    def modificar_producto():

        print("\n╔══════════════════════════════╗")
        print("║    Modificar Producto          ║")
        print("╚══════════════════════════════╝")
        id_productos = int(input(' Por favor, introduce el ID del Producto a Modificar: '))
        for producto in producto:
            if producto.id_productos == id_productos:
                producto.nombre = input(' Coloque un nuevo nombre del Producto: ')
                producto.descripcion = input('Coloque una descripción del producto: ')
                producto.precio = float(input(' Indique el nuevo precio del producto (digitos): '))
                producto.stock = int(input('Nuevo Stock del Producto (digitos): '))
                producto.id_categoria_productos = int(input('Por favor introduce un nuevo id de la Categoría del Producto: '))
                producto.url_imagen = input('Nueva URL de la Imagen del Producto: ')
                print(f'Producto con ID {id_productos} modificado correctamente.')
                return
        print(f'No se encontró producto con ID {id_productos}, por favor liste nuevamente los productos actuales para modificar.')

    def borrar_producto():


        print("\n╔══════════════════════════════╗")
        print("║       Borrar Producto          ║")
        print("╚═══════════════════════════  ═══╝")
        id_productos = int(input('ID del Producto a Eliminar: '))
        for producto in producto:
            if producto.id_productos == id_productos:
                producto.remove(producto)
                print(f'Producto con ID {id_productos} eliminado correctamente.')
                return
        print(f'No se encontró producto con ID {id_productos}.')

    def mostrar_menu():
        print('\n╔════════════════════════════════════════════╗')
        print('║               Menú de inicio                 ║')
        print('╠════════════════════════════════════════════╣')
        print('║ 1. Agregar un nuevo producto              ║')
        print('║ 2. Listar todos los productos             ║')
        print('║ 3. Modificar producto actual              ║')
        print('║ 4. Borrar Producto actual                 ║')
        print('║ 5. Salir -                                ║')
        print('╚════════════════════════════════════════════╝')
        return input('Seleccione una opción: ')

# if __name__ == "__main__":
#     while True:
#         opcion = mostrar_menu()

#         if opcion == '1':
#             agregar_producto()
#         elif opcion == '2':
#             listar_productos()
#         elif opcion == '3':
#             modificar_producto()
#         elif opcion == '4':
#             borrar_producto()
#         elif opcion == '5':
#             print('\n¡Hasta luego!')
#             break
#         else:
#             print('\nOpción inválida. Por favor, seleccione una opción válida para continuar.')


producto = Producto()
producto.agregar_producto()