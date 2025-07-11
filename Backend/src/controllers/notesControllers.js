import Note from "../models/Note.js";

export async function getAllNotes(req, res){
    try{
        const notes=await Note.find().sort({createdAt: -1}); //-1 newest first. its 1 by default
        res.status(200).json(notes);
    }catch(error){
        console.error("error in getAllNotes", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function getNoteById(req, res){
    try{
        const note=await Note.findById(req.params.id);  
        if(!note) res.status(404).json({message: "Note not found"});
        res.status(200).json(note);
    }catch(error){
        console.error("error in getNoteById", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function createNote(req, res){
    try{
        const {title, content} = req.body;
        const newNote = new Note({title: title, content: content});
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    }catch(error){
        console.error("error in createNote", error);
        res.status(500).json({message: "Internal server error"});
    }
    
}

export async function updateNote(req, res){
    try{
        const {title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title: title, content: content}, {new: true,});
        if(!updatedNote) res.status(404).json({message: "Note not found"});
        res.status(200).json(updatedNote);
    }catch(error){
        console.error("error in updateNote", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function deleteNote(req, res){
    try{
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote) res.status(404).json({message: "Note not found"});
        res.status(200).json(deletedNote);
    }catch(error){
        console.error("error in deleteNote", error);
        res.status(500).json({message: "Internal server error"});
    }
}

