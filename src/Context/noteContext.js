import { create } from 'zustand'

export const useNotes = create((set) => ({
  notesLength: [],
  setNotesLength: (newValue) => set({notesLength:newValue})

}))

export const useEditNote = create((set) => ({

  note: {},
    isEdit: false, // add stage 
  setNote: (newNote) => set({note:newNote}),
  setEdit: (newEdit) => set({edit:newEdit}),

}))