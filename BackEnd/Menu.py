import Decoradores
from Usuario import Usuario

def menu_inicial():
    while True:
            opcion = int(input(Decoradores.opcion))
            if (opcion >= 0 and opcion <= 2):
                if opcion == 1:
                    usuario = Usuario ()
                    username = usuario.inicio_usuario()
                    menu_usuario (username)                                
                    break
                elif opcion == 2:
                    usuario = Usuario()  
                    username = usuario.cargar_usuario()
                    if username:
                        menu_usuario(username) 
                    break

                elif opcion == 0:
                    print(Decoradores.closer)
                    print(Decoradores.decorador)
                    break
            else:
                print(Decoradores.erroneo)
                
def menu_usuario (username):
    print("\nElija una opción :\n 1- Mostrar usuario \n 2- Modificar datos al usuario \n 3- Comprar \n 4- Eliminar usuario \n 0- Salir de la Aplicación.\n")
    while True:
            opcion = int(input(Decoradores.opcion))
            if (opcion >= 0 and opcion <= 2):
                if opcion == 1:
                    usuario = Usuario ()
                    usuario.mostrar_usuario(username)
                    break
                elif opcion == 2:
                    usuario = Usuario()  
                    usuario.cargar_usuario()
                    break

                elif opcion == 0:
                    print(Decoradores.closer)
                    print(Decoradores.decorador)
                    break
            else:
                print(Decoradores.erroneo)

print(Decoradores.header)

print("\nElija una opción :\n 1- Soy usuario \n 2- No soy usuario, quiero registrarme \n 0- Salir de la Aplicación.\n")
menu_inicial()        