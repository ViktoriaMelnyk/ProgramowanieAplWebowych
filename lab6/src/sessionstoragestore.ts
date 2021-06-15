import { Guid } from './guid';
import { Note } from './note';
import { NoteStore } from './notestore';

export class SessionStorageStore implements NoteStore {

    deleteNote(id: Guid): void {
        let notesValue= <string>sessionStorage.getItem('notes');
        let notes = <Note[]>JSON.parse(notesValue)
        let newNotes=[]
        for (let note of notes) {
            
            if(note.id!==id)
            newNotes.push(note)
        }
        sessionStorage.setItem('notes', JSON.stringify(newNotes));
    }
    
  public addNote(note: Note): void {
        let notesValue= <string>sessionStorage.getItem('notes');
        let notes = <Note[]>JSON.parse(notesValue)
        if (!notes)
            notes=[]
        notes.push(note);
        sessionStorage.setItem('notes', JSON.stringify(notes));
        

    }

    public getNotes(): Note[] {
        let notesValue= <string>sessionStorage.getItem('notes');
        let notes = <Note[]>JSON.parse(notesValue)
        return notes;
    }
   
}