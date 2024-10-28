let firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "]; 
let lastNames = ["Zzz", "Burp", "Dogbone", "Droop","john"]; 
let fullNames = [];      
  for (let i = 0; i < firstNames.length; i++) { 
    for (let j = 0; j < lastNames.length; j++) {          
             fullNames.push(firstNames[i] + lastNames[j]);                 
              }          
         }  
         document.write(fullNames,); 
