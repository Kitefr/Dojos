# Dojo Facile (Niveau 6)

My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.

# Dojo extract file name (Niveau 6)

You have to extract a portion of the file name as follows:

Assume it will start with date represented as long number Followed by an underscore
Youll have then a filename with an extension it will always have an extra extension at the end

```
    1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION

    1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34

    1231231223123131_myFile.tar.gz2
```

```
    FILE_NAME.EXTENSION

    This_is_an_otherExample.mpg

    myFile.tar
```

# Return substring instance count - 2 (Niveau 5)

Complete the solution so that it returns the number of times the search_text is found within the full_text.

```
    searchSubstr( fullText, searchText, allowOverlap = true )
```

so that overlapping solutions are (not) counted. If the searchText is empty, it should return 0. Usage examples:

```
    searchSubstr('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
    searchSubstr('aaabbbcccc', 'bbb') # should return 1
    searchSubstr( 'aaa', 'aa' ) # should return 2
    searchSubstr( 'aaa', '' ) # should return 0
    searchSubstr( 'aaa', 'aa', false ) # should return 1
```

# Dojo Upload de Fichier

## Coté Frontend:

https://github.com/SoAanyip/React-FileUpload

Créer un upload d'image avec ReactJS et Firebase Storage
Pour cela, vous pouvez utiliser ce composant existant:

https://github.com/fris-fruitig/react-firebase-file-uploader

Nous utiliserons Firebase Storage pour uploader l'image sur une app Firebase.

Doc: https://firebase.google.com/docs/storage/web/upload-files
Voici les identifiants de l'application Firebase:

```
// Initialize Firebase
var config = {
apiKey: "AIzaSyBRCC4KdTit73xre8WLdZ3XLI1yBoc6sm4",
authDomain: "routedesvinsmobile.firebaseapp.com",
databaseURL: "https://routedesvinsmobile.firebaseio.com",
projectId: "routedesvinsmobile",
storageBucket: "routedesvinsmobile.appspot.com",
messagingSenderId: "92180665710"
};
firebase.initializeApp(config);
```

# Dojo Firebase Multi-Auth

Avec ReactJS, React-Router et Firebase Auth, permettre à un utilisateur de se connecter avec son Téléphone, Facebook et Google.

https://medium.com/@harittweets/sign-in-with-google-with-react-and-firebase-81076135b65d
https://firebase.google.com/docs/auth/web/start
https://firebase.google.com/docs/auth/web/facebook-login
https://firebase.google.com/docs/auth/web/google-signin
https://coderjourney.com/tutorials/how-to-add-authentication-to-react-with-firebase/
https://firebase.google.com/docs/auth/web/start

# Dojo Vincent

Basic Algorithm Scripting: Slice and Splice
You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

```
    frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
    frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
    frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
```
