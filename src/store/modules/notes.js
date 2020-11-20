import axios from "axios";

const state = {
  notes: [],
};

const getters = {
  allNotes: (state) => state.notes,
};

const actions = {
  async fetchNotes({ commit }) {
    const response = await axios.get("http://postit.wac.under-wolf.eu/notes/");
    commit("setNotes", response.data.notes);
  },

  async fetchNote(id) {
    const response = await axios.get(
      `http://postit.wac.under-wolf.eu/notes/${id}`,
    );
    return response.data._id;
  },

  async addNote({ commit }, title) {
    var response = await axios.post("http://postit.wac.under-wolf.eu/notes/", {
      title,
      content: [],
    });
    response = await axios.get(
      `http://postit.wac.under-wolf.eu/notes/${response.data.note_id}`,
    );
    commit("newNote", response.data.note);
    // const newNote = actions.fetchNote(response.data.note._id);
    // commit("newNote", newNote);
  },

  async deleteNote({ commit }, id) {
    await axios.delete(`http://postit.wac.under-wolf.eu/notes/${id}`);
    commit("removeNote", id);
  },

  async addContent({ commit }, note) {
    const response = await axios.put(
      `http://postit.wac.under-wolf.eu/notes/${note.id}`,
      { title: note.title, content: note.content },
    );
    commit("newContent", { id: response.data.note_id, content: note.content });
  },

  async deleteContentItem({ commit }, editedNote) {
    const response = await axios.put(
      `http://postit.wac.under-wolf.eu/notes/${editedNote.id}`,
      { title: editedNote.title, content: editedNote.newContent },
    );
    commit("removeContent", {
      id: response.data.note_id,
      content: editedNote.newContent,
    });
  },
};

const mutations = {
  setNotes: (state, notes) => (state.notes = notes),
  newNote: (state, note) => state.notes.unshift(note),
  removeNote: (state, id) =>
    (state.notes = state.notes.filter((note) => note._id !== id)),
  newContent: (state, data) => {
    let index = state.notes.findIndex((note) => note._id === data.id);
    state.notes[index].content = data.content;
  },
  removeContent: (state, data) => {
    let index = state.notes.findIndex((note) => note._id === data.id);
    state.notes[index].content = data.content;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
