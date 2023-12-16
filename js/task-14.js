//TODO:=============================================
/**
 *? Напиши клас Notes який управляє колекцією нотаток у
 *? властивості items.
 *? Нотатка - це об'єкт із властивостями text і priority.
 *? Додай класу статичний метод Priopity,
 *? який буде повертати об'єкт із пріоритетами.
 *? Додай методи addNote(note), removeNote(text)
 *? updatePriority(text, newPriority)
 */

 class Notes {
    static Priority() {
      return {
        HIGHT: "hight",
        LOW: "low",  
      }  
    }
    constructor (){
       this.items = []; 
    }
    addNote(note){
     this.items.push(note);
     return note;
    } 
    
    removeNote(text){
    const index = this.items.findIndex(item => item.text === text);
     if(index !== -1){
    const delElem =  this.items.splice(index,1);
    return delElem[0];
     }
    }
    
 }
   
 const note1 = new Notes()

  
 note1.addNote({ text: "Note1", priority: Notes.Priority().LOW });
 note1.addNote({ text: "Note2", priority: Notes.Priority().LOW });
 note1.addNote({ text: "Note3", priority: Notes.Priority().LOW });
 console.log(note1.addNote({ text: "Note4", priority: Notes.Priority().LOW }));
 console.log(note1);
 console.log(note1.removeNote("Note4"))
 
