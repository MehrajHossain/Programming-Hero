//***In the Sundarbans, for example, an average of 10 animals can be spotted in the first 10 miles, fiffty animals in the following 10 to 20 miles, and 100 animals beyond 20 miles.


          // first10Miles = 100;
          // 20miles = 100 + 500;
          // after 20miles = 600 + 


          function animalCount(miles) {
            if(miles<=10){
              const count = miles*10;
              return count;
            }
            else if (miles > 10 && miles <= 20) {
              const count = 100 + (miles - 10) * 50;
              return count;
          
            }
            else if (miles >20) {
              const count = 600 + (miles-20)*100;
              return count;
            }
          }
          const animals = animalCount(21);
          console.log(animals);
          
          
          
          