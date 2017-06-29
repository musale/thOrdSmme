import MongoClient from 'mongodb';

const state = {
  db: null
};

const connect = (url, done) => {
  if (state.db)
    return done();

  MongoClient.connect(url, (err, db) => {
    if (err)
      return done(err);
    state.db = db;
    done();
  });
};

const getDB = () => {
  return state.db;
};

const close = (done) => {
  if (state.db) {
    state.db.close((err, result) => {
      state.db = null;
      state.mode = null;
      console.log(`Closed connection: ${result}`);
      done(err);
    });
  }
};
export {connect, getDB, close};
