const noteCTRL = {};

noteCTRL.renderNotForm = (req,res) =>{
    res.send('note add');
};
noteCTRL.createNewNote = (req, res) =>{
    res.send('new note');
};
noteCTRL.renderAllNotes = (req, res) =>{
    res.send('all notes');
};
noteCTRL.renderEditNote = (req, res) =>{
    res.send('edit note');
};
noteCTRL.updateNote =(req,res) => {
    res.send('update note');
};
noteCTRL.deleteNote = (req, res) =>{
    res.send('delete note');
}


module.exports =  noteCTRL;