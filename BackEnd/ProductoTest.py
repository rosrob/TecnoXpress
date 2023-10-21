
class Producto:
     def __init__(self, id_productos, nombre, descripcion, precio, stock, id_categoria_productos, url_imagen):
        self.id_productos = id_productos
        self.nombre = nombre
        self.descripcion = descripcion
        self.precio = precio
        self.stock = stock
        self.id_categoria_productos = id_categoria_productos
        self.url_imagen = url_imagen

# Lista para almacenar productos
productos = []

def agregar_producto():


    print("\n╔══════════════════════════════╗")
    print("║      Agregar Producto          ║")
    print("╚══════════════════════════════╝")
    id_productos = int(input('Por favor introduzca un nuevo ID del Producto: '))
    nombre = input(' Por favor escriba el nombre del Producto: ')
    descripcion = input('Escriba una descripción del Producto: ')
    precio = float(input(' Introduce el precio del Producto (solo en digitos): '))
    stock = int(input('Introduzca la cantidad de stock del Producto (digitos): '))
    id_categoria_productos = int(input('ID de la Categoría del Producto: '))
    url_imagen = input('URL de la Imagen del Producto: ')
    producto = Producto(id_productos, nombre, descripcion, precio, stock, id_categoria_productos, url_imagen)
    productos.append(producto)
    print(f' El producto "{producto.nombre}" se ha agregado correctamente.')

def listar_productos():


    print("\n╔══════════════════════════════╗")
    print("║       Lista de Productos       ║")
    print("╚══════════════════════════════╝")
    if not productos:
        print("Actualmente no hay productos disponibles.")
    for producto in productos:
        print(f'ID: {producto.id_productos}, Nombre: {producto.nombre}, Precio: {producto.precio}, Stock: {producto.stock}')

def modificar_producto():


    print("\n╔══════════════════════════════╗")
    print("║    Modificar Producto          ║")
    print("╚══════════════════════════════╝")
    id_productos = int(input(' Por favor, introduce el ID del Producto a Modificar: '))
    for producto in productos:
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
    for producto in productos:
        if producto.id_productos == id_productos:
            productos.remove(producto)
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

if __name__ == "__main__":
    while True:
        opcion = mostrar_menu()

        if opcion == '1':
            agregar_producto()
        elif opcion == '2':
            listar_productos()
        elif opcion == '3':
            modificar_producto()
        elif opcion == '4':
            borrar_producto()
        elif opcion == '5':
            print('\n¡Hasta luego!')
            break
        else:
            print('\nOpción inválida. Por favor, seleccione una opción válida para continuar.')
