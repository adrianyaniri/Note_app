const {Router} = require('express');
const router = Router();

const {
    renderNotForm, createNewNote,
    renderAllNotes, renderEditNote,
    updateNote,deleteNote
} = require('../controllers/note.controlle');

router.get('/notes/add', renderNotForm);
router.post('/notes/add', createNewNote);

// get all note
router.get('/notes', renderAllNotes);

// edit notes
router.get('/notes/edit/:id', renderEditNote);
router.put('/notes/edit/:id',updateNote);

//delete
router.delete('/notes/delete/:id',deleteNote);

module.exports = router;

