//import notebook from '../controllers/notebookController';

const notebook = require("../controllers/notebookController")

return (app) => {
    app.route('/notes')
        .get(notebook.getAllNotes)
        .post(notebook.createNote);

    app.route('/notes/:noteId')
        .get(notebook.getNote)
        .put(notebook.updateNote)
        .delete(notebook.deleteNote);
};