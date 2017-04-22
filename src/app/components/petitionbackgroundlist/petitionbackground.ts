import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'petition-background',
  templateUrl: `petitionbackground.html`,
})
export class PetitionBackgroundComponent  { 

    names: string[];
    

    constructor(){
        this.names = [
            "Eddie Solar", 
            "Yaumel Betancourt", 
            "Rafa", "Tony Romo", 
            "Clark Kent", 
            "Bruce Wayne", 
            "Jennifer Lopez", 
            "Superman", 
            "Batman",
            "Homer Simpson",
            "Peter Griffin",
            "Thor",
            "Akmed Reyes",
            "That guy",
            "Ivana Tinkle",
            " Solar", 
            " Betancourt", 
            "Rafael Sobrino",
            "Des", 
            " Kent", 
            "Bruce Manor", 
            "Wonder Woman", 
            "Superman", 
            "Robin",
            "Bart",
            "Blake Griffin",
            "Miami Heat",
            "NFL",
            "Where's My Money",
            "Ivana Tinkle",
            "I'm tired",
            "Eddie is the best",
            "Barack Obama",
            "Tony Stark",
            "B Banner"
            ]
    }

}