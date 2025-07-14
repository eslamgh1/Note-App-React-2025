import { create } from 'zustand'

export const useNotes = create((set) => ({
  notesLength: 0,
  setNotesLength: (newValue) => set({notesLength:newValue})

}))