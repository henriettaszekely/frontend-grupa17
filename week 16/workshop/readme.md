
Rock Paper : https://github.com/razvantimis/g17-rock-paper-scissors/tree/main/
Player game : https://github.com/razvantimis/g17-theplayer/tree/main/
# Workshop - Player game - React JS

Cerinte:
1. (obligatoriu) Definiti un container de dimensiuni fixe ( de exemplu height: 400, width: 400) unde puteti playerul - il numim gameContainer

2. (obligatoriu) Player sa poate misca in toate directile

3. (obligatoriu) Un player nu poate iesi inafara gameContainer ( de la punctul 1)

4. (optional) Adaugati abstacole, puneti cateva div-uri ( dimensiuni fixe cu anumita culoare) in gameContainer, pot fi random puse in container.

5. (optional) Player daca intalneste un obstacol, nu poate trece de el

6. (optional) Player sa aiba o proprietate life, care default va avea valoare 100, o afisam deasupra  de Player ( div-ului care reprezinta )

7. (optional) De fiecare data cand Player-ul loveste un obstacol, ii vom scadea 1 punct din viata lui 
  1. o secunda viata lui va fi de culoare rosie. Dupa care revenit la culoarea default setata ( pentru a oferi feedback, utilizatorului care se joaca )

8. (optional) Daca Player-ul ajunge sa aiba viata egal cu zero, atunci resetam jocul.

Observati:
1. Sa folositi sintaxa noua de ES6
2. OOP Style
3. Codul cat mai granular, o singura responsabilitate per functie/metoda, o functie/metoda 10 maxim de cod ( pot exista excepti dar ca regula de urmat)
4. React Js

Sfaturi:

1. In metoda move din clasa Player, se va pune logica de la cerinta 2
   1. Daca apasam arrow up, vom face style.top = style.top - 20
   2. Daca apasam arrow down, vom face style.top = style.top + 20
   3. etc.
2. Cerinta 3, acolo recomand o metoda playerIsOutsideOfContainer(nextTop, nextLeft) care sa returneze true sau false. Daca returneza true atunci nu mai facem update la style.top/left, pe false, facem
3. Cerinta 5, la fel ca mai sus, facem o metoda care o punem in clasa Game, playerHitObstacle. Recomand sa se faca o clasa Game pentru logica cu obstacole, la fel si pentru obstacole, o clasa Obstacle. Game va avea o lista de obiecte Obstacle si un obiect player. Avem o lista de obiecte Obstacle, verifici cu fiecare
Ca sa facem verificare, aveti doua variante:

   1. Mutati logica de miscare in Game
   2. Folositi o functie callback, care o apelati de fiecare data cand user vrea sa miste Player-ul, asta o trimiteti din Clasa Game catre obiectul player


