##############  Exemple d'une classe Mere et d'un cas d'héritage ###################
#############    By Céline OULMI  ###################

class Salarié(object):  ## qui hérite de object
    """Classe des salariés"""           # Documentation de la classe

### Constructeur de la classe : construite et initialiser un  objet
    def __init__(self, nom, pnom):
        print ("Création d'un objet salarié...")
        #self._Nom=nom  ### attribut protégé (en protected, suite héritage, accessibles aux classes qui dérivent self.__Nom = nom  ### attribut privée ( lnaccessible de l'exterieur)
        #self.__Nom=nom  ## attribut privé, inaccessible de l'exterieur
        ### Sinon
        self.Nom=nom   ## 2 attributs Nom et Prenom en public, accessible à tous
        self.Prenom=pnom
### Les méthodes getter et setter (sécurité d'accès) 
    def get_nom(self):  # Méthode 'get' pour retourner le nom
        return self.Nom
    def get_pnom(self):
        return self.Prenom
  ### pour toutes les caratéristiques ou attributs de la classe
    def set_nom(self, nouveau_nom):   # Méthode 'set' pour modifier le nom
        if nouveau_nom == "":
            print ("Le nom de l'employé ne peut pas être vide!!!!")
        else:
            self.Nom = nouveau_nom
            print ("Le Nom à été modifié.") 
    def set_pnom(self, nouveau_pnom):   # Méthode 'set' pour modifier le nom
        if nouveau_pnom == "":
            print ("Le prénom de l'employé ne peut pas être vide!!!!")
        else:
            self.Prenom = nouveau_pnom
            print ("Le Nom à été modifié.")
### Autres méthode, exemple affichage            
    def afficher(self):
        print (self.Nom, " a été ajouté(e)")
        
### Création d'une nouvelle classe Users

### User est une classe qui hérite de la classe Salarié#

### Les attributs pour la classe User : Nom et Prenom hérités,
### puis Login et Password au moins
### classe User :
    
class User(Salarié):
### constructeur de la nouvelle classe User
    def __init__(self, nom, pnom, login, pwd):
        print ("Création d'un objet User...")
        Salarié.__init__(self,nom, pnom)  #### ou bien faire référence par super(, selon la version
        #super().__init__(self,nom, pnom)
        ##self.Nom = nom
        ##self.Prenom=pnom
        # Initialisation des attributs supplémentaires
        self.Login=login
        self.Password=pwd
    ### les get et les set pour les attributs login et pwd
        
    def Afficher_User(self):
        print("User : ", self.get_nom(),"", self.get_pnom())
## Fin classes donc de nouveaux types
        
### Autres méthodes    
##    def GenPWD(self):
##    def GenPWD():        
##    def hashPWD(self, pwd):
##    def VerifPWD(self), hashpwd):

    
### main, programme principal
## Classe mère : Salarié

salarié1 = Salarié("OULMI","Céline")  # Initialiser un objet de la classe vide
salarié1.afficher()               # Accéder à une méthode de la classe
 
print ("Nom de l'employé est:", salarié1.get_nom()) # Accéder à une propriété de la classe
print ("Modification du nom de la classe :")
salarié1.set_nom("") # Génération d'une erreur, si Nom est vide
 
salarié1.set_nom("Toto")
salarié1.afficher()

## classe qui dérive : User
User1=User("OULMI", "Céline", "coulmi", "Mypass")
User1.Afficher_User()
print("Nom de User&",User1.get_nom())


