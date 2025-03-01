/*Create a business name generator by combining list of adjectives and shop name and aother word 
Adjective:
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garments

Another Word:
bros
Limited
Hub

*/
let rand = Math.random()
        let first, second, third
        // 0 0.33 0.66 1

        // lets generate the first word

        if(rand<0.33){
            first = "Crazy"
        }
        else if(rand<0.66 &&rand>=0.33){
            first = "Amazing"
        }
        else{
            first = "Fire"
        }
         // lets generate the first word
          rand = Math.random()

         if(rand<0.33){
            second = "engine"
        }
        else if(rand<0.66 &&rand>=0.33){
            second = "foods"
        }
        else{
            second = "garments"
        }
         // lets generate the third word
          rand = Math.random()

         if(rand<0.33){
            third = "bros"
        }
        else if(rand<0.66 &&rand>=0.33){
            third = "limited"
        }
        else{
            third = "hub"
        }
        console.log(`${first} ${second} ${third}`)



