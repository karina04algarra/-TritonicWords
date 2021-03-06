import * as SQLite from "expo-sqlite";

function openDatabase() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }


  const db = SQLite.openDatabase("__004_tritonicwords.db", undefined, undefined, undefined, db => {
    console.log(db._db._closed === false ? 'DB Is connected' : 'DB Unavailable')
  });
  return db;
}

export const database = openDatabase();

const executeSql = async (sql, params = []) => {
  return new Promise((resolve, reject) => database.transaction(tx => {
    tx.executeSql(sql, params, (_, { rows }) => resolve(rows._array), reject)
  }))
}

const initialize = async () => {
  
    try {
      await executeSql(
              `CREATE TABLE IF NOT EXISTS Level (
                id integer primary key not null,
                totalPoints integer,
                levelName text,
                difficult integer)`, []);

      //   db.transaction((tx) => {
      //     tx.executeSql(
      //       `
      //       DROP TABLE Question;
      //       DROP TABLE ItemQuestion;
      //       DROP TABLE Answer;
      //       `
      //     );

          
      // }
      // );

        
      await executeSql(
            `CREATE TABLE IF NOT EXISTS Question (
              id integer primary key not null,
              quote text,
              itemQuestionCorrectID integer,
              levelId integer)`, []);

      await executeSql(
            `CREATE TABLE IF NOT EXISTS ItemQuestion (
              id integer primary key not null,
              name text,
              learnMore text,
              questionID integer,
              sound text)`, []);   


      await executeSql(
          `CREATE TABLE IF NOT EXISTS Answer (
            id integer primary key not null,
            questionID integer,
            itemQuestionID integer,
            points integer)`, []);
       
    } catch (e) {
      console.log("error creating tables", e)
    }
  }

  const Dbmigration = async () => {
    try {
      await executeSql("Insert into Level ( id, totalPoints, levelName, difficult) SELECT ?, ?, ?, ? Where Not Exists(Select * from Level where id = ?)" ,[ 1, 9, "1", 1, 1]).catch(error => console.log("Level ID: 1",error))
      await executeSql("Insert into Level ( id, totalPoints, levelName, difficult) SELECT ?, ?, ?, ? Where Not Exists(Select * from Level where id = ?)" ,[ 2, 9, "2", 1, 2]).catch(error => console.log("Level ID: 2",error))
      await executeSql("Insert into Level ( id, totalPoints, levelName, difficult) SELECT ?, ?, ?, ? Where Not Exists(Select * from Level where id = ?)" ,[ 3, 9, "3", 1, 3]).catch(error => console.log("Level ID: 3",error))
      await executeSql("Insert into Level ( id, totalPoints, levelName, difficult) SELECT ?, ?, ?, ? Where Not Exists(Select * from Level where id = ?)" ,[ 4, 9, "4", 1, 4]).catch(error => console.log("Level ID: 4",error))
      await executeSql("Insert into Level ( id, totalPoints, levelName, difficult) SELECT ?, ?, ?, ? Where Not Exists(Select * from Level where id = ?)" ,[ 5, 9, "5", 1, 5]).catch(error => console.log("Level ID: 5",error))
      await executeSql("Insert into Level ( id, totalPoints, levelName, difficult) SELECT ?, ?, ?, ? Where Not Exists(Select * from Level where id = ?)" ,[ 6, 9, "6", 1, 6]).catch(error => console.log("Level ID: 6",error))
    } catch (e) {
      console.log("error insertLevel", e)
    }

    try {
      // Question
      await executeSql("Insert into Question ( id, quote, itemQuestionCorrectID, levelId) SELECT ?, ?, ?, ? Where Not Exists(Select * From Question Where id = ?)" ,[ 1, 'Mi tarjeta es --------.', 1, 1, 1 ]).catch(error => console.log("Question ID: 1",error))
      await executeSql("Insert into Question ( id, quote, itemQuestionCorrectID, levelId) SELECT ?, ?, ?, ? Where Not Exists(Select * From Question Where id = ?)" ,[ 2, 'Yo ------ su cuenta.', 5, 1, 2 ]).catch(error => console.log("Question ID: 2",error))
      await executeSql("Insert into Question ( id, quote, itemQuestionCorrectID, levelId) SELECT ?, ?, ?, ? Where Not Exists(Select * From Question Where id = ?)" ,[ 3, 'Usted ------ el pago.', 9, 1, 3 ]).catch(error => console.log("Question ID: 3",error))
      await executeSql("Insert into Question ( id, quote, itemQuestionCorrectID, levelId) SELECT ?, ?, ?, ? Where Not Exists(Select * From Question Where id = ?)" ,[ 4, 'El ----- de alimentos.', 10, 2, 4 ]).catch(error => console.log("Question ID: 4",error))
      await executeSql("Insert into Question ( id, quote, itemQuestionCorrectID, levelId) SELECT ?, ?, ?, ? Where Not Exists(Select * From Question Where id = ?)" ,[ 5, 'Yo ------ mi confianza en usted.', 14, 2, 5 ]).catch(error => console.log("Question ID: 5",error))
      await executeSql("Insert into Question ( id, quote, itemQuestionCorrectID, levelId) SELECT ?, ?, ?, ? Where Not Exists(Select * From Question Where id = ?)" ,[ 6, 'Ella ------ el dinero.', 18, 2, 6 ]).catch(error => console.log("Question ID: 6",error))
      await executeSql("Insert into Question ( id, quote, itemQuestionCorrectID, levelId) SELECT ?, ?, ?, ? Where Not Exists(Select * From Question Where id = ?)" ,[ 7, 'Su ------- es bueno.', 19, 3, 7 ]).catch(error => console.log("Question ID: 7",error))
      await executeSql("Insert into Question ( id, quote, itemQuestionCorrectID, levelId) SELECT ?, ?, ?, ? Where Not Exists(Select * From Question Where id = ?)" ,[ 8, 'Yo ------ pacientes.', 23, 3, 8 ]).catch(error => console.log("Question ID: 8",error))
      await executeSql("Insert into Question ( id, quote, itemQuestionCorrectID, levelId) SELECT ?, ?, ?, ? Where Not Exists(Select * From Question Where id = ?)" ,[ 9, '??l ------- a la ni??a con rosasea.', 27, 3, 9 ]).catch(error => console.log("Question ID: 9",error))
      await executeSql("Insert into Question ( id, quote, itemQuestionCorrectID, levelId) SELECT ?, ?, ?, ? Where Not Exists(Select * From Question Where id = ?)" ,[ 10, 'La obra tiene un ------- interesante.', 28, 4, 10 ]).catch(error => console.log("Question ID: 10",error))
      await executeSql("Insert into Question ( id, quote, itemQuestionCorrectID, levelId) SELECT ?, ?, ?, ? Where Not Exists(Select * From Question Where id = ?)" ,[ 11, 'Hable con ella, yo ----- con el esposo.', 32, 4, 11 ]).catch(error => console.log("Question ID: 11",error))
      await executeSql("Insert into Question ( id, quote, itemQuestionCorrectID, levelId) SELECT ?, ?, ?, ? Where Not Exists(Select * From Question Where id = ?)" ,[ 12, 'El presidente -------- media hora con nosotros.', 36, 4, 12 ]).catch(error => console.log("Question ID: 12",error))
      await executeSql("Insert into Question ( id, quote, itemQuestionCorrectID, levelId) SELECT ?, ?, ?, ? Where Not Exists(Select * From Question Where id = ?)" ,[ 13, 'El perro es un animal --------', 37, 5, 13 ]).catch(error => console.log("Question ID: 13",error))
      await executeSql("Insert into Question ( id, quote, itemQuestionCorrectID, levelId) SELECT ?, ?, ?, ? Where Not Exists(Select * From Question Where id = ?)" ,[ 14, 'Yo -------- caballos y yeguas.', 41, 5, 14 ]).catch(error => console.log("Question ID: 14",error))
      await executeSql("Insert into Question ( id, quote, itemQuestionCorrectID, levelId) SELECT ?, ?, ?, ? Where Not Exists(Select * From Question Where id = ?)" ,[ 15, 'Ella ------ un loro.', 45, 5, 15 ]).catch(error => console.log("Question ID: 15",error))
      await executeSql("Insert into Question ( id, quote, itemQuestionCorrectID, levelId) SELECT ?, ?, ?, ? Where Not Exists(Select * From Question Where id = ?)" ,[ 16, '??C??al es su -------?', 46, 6, 16 ]).catch(error => console.log("Question ID: 16",error))
      await executeSql("Insert into Question ( id, quote, itemQuestionCorrectID, levelId) SELECT ?, ?, ?, ? Where Not Exists(Select * From Question Where id = ?)" ,[ 17, 'Tu escribe el texto y yo lo -----.', 50, 6, 17 ]).catch(error => console.log("Question ID: 17",error))
      await executeSql("Insert into Question ( id, quote, itemQuestionCorrectID, levelId) SELECT ?, ?, ?, ? Where Not Exists(Select * From Question Where id = ?)" ,[ 18, 'La ni??a------- su diario.', 54, 6, 18 ]).catch(error => console.log("Question ID: 18",error))
    } catch (e) {
      console.log("error insertQuestion", e)
    }

    try {
      // Item
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 1, 'd??bito', 'D??bito (Sustantivo): Cantidad de dinero que se debe pagar.', 1, 'd??bito.mp3', 1 ]).catch(error => console.log("ItemQuestion ID: 1",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 2, 'debito', 'Debito (verbo debitar en presente, conjugado en primera persona):  Yo debito tu cuenta. ', 1, 'debito.mp3', 2 ]).catch(error => console.log("ItemQuestion ID: 2",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 3, 'debit??', 'Debit?? (verbo debitar en pasado, conjugado en tercera persona): Ella debit?? su cuenta.', 1, 'debit??.mp3', 3 ]).catch(error => console.log("ItemQuestion ID: 3",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 4, 'd??bito', 'D??bito (Sustantivo): Cantidad de dinero que se debe pagar.', 2, 'd??bito.mp3', 4 ]).catch(error => console.log("ItemQuestion ID: 4",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 5, 'debito', 'Debito (verbo debitar en presente, conjugado en primera persona):  Yo debito tu cuenta. ', 2, 'debito.mp3', 5 ]).catch(error => console.log("ItemQuestion ID: 5",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 6, 'debit??', 'Debit?? (verbo debitar en pasado, conjugado en tercera persona): Ella debit?? su cuenta.', 2, 'debit??.mp3', 6 ]).catch(error => console.log("ItemQuestion ID: 6",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 7, 'd??bito', 'd??bito (Sustantivo): Cantidad de dinero que se debe pagar.', 3, 'd??bito.mp3', 7 ]).catch(error => console.log("ItemQuestion ID: 7",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 8, 'debito', 'Debito (verbo debitar en presente, conjugado en primera persona):  Yo debito tu cuenta. ', 3, 'debito.mp3', 8 ]).catch(error => console.log("ItemQuestion ID: 8",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 9, 'debit??', 'Debit?? (verbo debitar en pasado, conjugado en tercera persona): Ella debit?? su cuenta.', 3, 'debit??.mp3', 9 ]).catch(error => console.log("ItemQuestion ID: 9",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 10, 'dep??sito', 'Dep??sito (Sustantivo): Lugar donde se almacenan algunas cosas.', 4, 'dep??sito.mp3', 10 ]).catch(error => console.log("ItemQuestion ID: 10",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 11, 'deposito', 'Deposito (verbo depositar en presente, conjugado en primera persona): Yo deposito mi dinero en el banco.', 4, 'deposito.mp3', 11 ]).catch(error => console.log("ItemQuestion ID: 11",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 12, 'deposit??', 'Deposit?? (verbo depositar en pasado, conjugado en tercera persona): ??l deposit?? su confianza en usted.', 4, 'deposit??.mp3', 12 ]).catch(error => console.log("ItemQuestion ID: 12",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 13, 'dep??sito', 'Dep??sito (Sustantivo): Lugar donde se almacenan algunas cosas.', 5, 'dep??sito.mp3', 13 ]).catch(error => console.log("ItemQuestion ID: 13",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 14, 'deposito', 'Deposito (verbo depositar en presente, conjugado en primera persona): Yo deposito mi dinero en el banco.', 5, 'deposito.mp3', 14 ]).catch(error => console.log("ItemQuestion ID: 14",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 15, 'deposit??', 'Deposit?? (verbo depositar en pasado, conjugado en tercera persona): ??l deposit?? su confianza en usted.', 5, 'deposit??.mp3', 15 ]).catch(error => console.log("ItemQuestion ID: 15",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 16, 'dep??sito', 'Dep??sito (Sustantivo): Lugar donde se almacenan algunas cosas.', 6, 'dep??sito.mp3', 16 ]).catch(error => console.log("ItemQuestion ID: 16",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 17, 'deposito', 'Deposito (verbo depositar en presente, conjugado en primera persona): Yo deposito mi dinero en el banco.', 6, 'deposito.mp3', 17 ]).catch(error => console.log("ItemQuestion ID: 17",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 18, 'deposit??', 'Deposit?? (verbo depositar en pasado, conjugado en tercera persona): ??l deposit?? su confianza en usted.', 6, 'deposit??.mp3', 18 ]).catch(error => console.log("ItemQuestion ID: 19",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 19, 'diagn??stico', 'Diagn??stico (Sustantivo): Reconocimiento de una enfermedad sobre la base de sus s??ntomas.', 7, 'diagn??stico.mp3', 19 ]).catch(error => console.log("ItemQuestion ID: 20",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 20, 'diagnostico', 'Diagnostico (verbo diagnosticar en presente, conjugado en primera persona): Yo diagnostico con ex??menes.', 7, 'diagnostico.mp3', 20 ]).catch(error => console.log("ItemQuestion ID: 21",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 21, 'diagnostic??', 'Diagnostic?? (verbo en pasado, conjugado en tercera persona): Ella le diagnostic?? la enfermedad.', 7, 'diagnostic??.mp3', 21 ]).catch(error => console.log("ItemQuestion ID: 22",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 22, 'diagn??stico', 'Diagn??stico (Sustantivo): Reconocimiento de una enfermedad sobre la base de sus s??ntomas.', 8, 'diagn??stico.mp3', 22 ]).catch(error => console.log("ItemQuestion ID: 23",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 23, 'diagnostico', 'Diagnostico (verbo diagnosticar en presente, conjugado en primera persona): Yo diagnostico con ex??menes.', 8, 'diagnostico.mp3', 23 ]).catch(error => console.log("ItemQuestion ID: 24",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 24, 'diagnostic??', 'Diagnostic?? (verbo en pasado, conjugado en tercera persona): Ella le diagnostic?? la enfermedad.', 8, 'diagnostic??.mp3', 24 ]).catch(error => console.log("ItemQuestion ID: 25",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 25, 'diagn??stico', 'Diagn??stico (Sustantivo): Reconocimiento de una enfermedad sobre la base de sus s??ntomas.', 9, 'diagn??stico.mp3', 25 ]).catch(error => console.log("ItemQuestion ID: 26",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 26, 'diagnostico', 'Diagnostico (verbo diagnosticar en presente, conjugado en primera persona): Yo diagnostico con ex??menes.', 9, 'diagnostico.mp3', 26 ]).catch(error => console.log("ItemQuestion ID: 27",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 27, 'diagnostic??', 'Diagnostic?? (verbo en pasado, conjugado en tercera persona): Ella le diagnostic?? la enfermedad.', 9, 'diagnostic??.mp3', 27 ]).catch(error => console.log("ItemQuestion ID: 28",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 28, 'di??logo', 'Di??logo (Sustantivo): Conversaci??n, charla o pl??tica entre dos o m??s personas.', 10, 'di??logo.mp3', 28 ]).catch(error => console.log("ItemQuestion ID: 29",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 29, 'dialogo', 'Dialogo (verbo dialogar en presente, conjugado en primera persona): yo dialogo con el profesor.', 10, 'dialogo.mp3', 29 ]).catch(error => console.log("ItemQuestion ID: 30",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 30, 'dialog??', 'Dialog?? (verbo en pasado, conjugado en tercera persona): ??l dialog?? con las familias.', 10, 'dialog??.mp3', 30 ]).catch(error => console.log("ItemQuestion ID: 31",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 31, 'di??logo', 'Di??logo (Sustantivo): Conversaci??n, charla o pl??tica entre dos o m??s personas.', 11, 'di??logo.mp3', 31 ]).catch(error => console.log("ItemQuestion ID: 18",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 32, 'dialogo', 'Dialogo (verbo dialogar en presente, conjugado en primera persona): yo dialogo con el profesor.', 11, 'dialogo.mp3', 32 ]).catch(error => console.log("ItemQuestion ID: 32",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 33, 'dialog??', 'Dialog?? (verbo en pasado, conjugado en tercera persona): ??l dialog?? con las familias.', 11, 'dialog??.mp3', 33 ]).catch(error => console.log("ItemQuestion ID: 33",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 34, 'di??logo', 'Di??logo (Sustantivo): Conversaci??n, charla o pl??tica entre dos o m??s personas.', 12, 'di??logo.mp3', 34 ]).catch(error => console.log("ItemQuestion ID: 34",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 35, 'dialogo', 'Dialogo (verbo dialogar en presente, conjugado en primera persona): yo dialogo con el profesor.', 12, 'dialogo.mp3', 35 ]).catch(error => console.log("ItemQuestion ID: 35",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 36, 'dialog??', 'Dialog?? (verbo en pasado, conjugado en tercera persona): ??l dialog?? con las familias.', 12, 'dialog??.mp3', 36 ]).catch(error => console.log("ItemQuestion ID: 36",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 37, 'dom??stico', 'Dom??stico (Sustantivo): Persona que trabaja haciendo labores de aseo para una familia.', 13, 'dom??stico.mp3', 37 ]).catch(error => console.log("ItemQuestion ID: 37",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 38, 'domestico', 'Domestico (verbo domesticar en presente, conjugado en primera persona): Yo domestico cabras salvajes.', 13, 'domestico.mp3', 38 ]).catch(error => console.log("ItemQuestion ID: 38",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 39, 'domestic??', 'Domestic?? (verbo domesticar en pasado, conjugado en tercera persona): Ella domestic?? una gallina.', 13, 'domestic??.mp3', 39 ]).catch(error => console.log("ItemQuestion ID: 39",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 40, 'dom??stico', 'Dom??stico (Sustantivo): Persona que trabaja haciendo labores de aseo para una familia.', 14, 'dom??stico.mp3', 40 ]).catch(error => console.log("ItemQuestion ID: 40",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 41, 'domestico', 'Domestico (verbo domesticar en presente, conjugado en primera persona): Yo domestico cabras salvajes.', 14, 'domestico.mp3', 41 ]).catch(error => console.log("ItemQuestion ID: 41",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 42, 'domestic??', 'Domestic?? (verbo domesticar en pasado, conjugado en tercera persona): Ella domestic?? una gallina.', 14, 'domestic??.mp3', 42 ]).catch(error => console.log("ItemQuestion ID: 42",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 43, 'dom??stico', 'Dom??stico (Sustantivo): Persona que trabaja haciendo labores de aseo para una familia.', 15, 'dom??stico.mp3', 43 ]).catch(error => console.log("ItemQuestion ID: 43",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 44, 'domestico', 'Domestico (verbo domesticar en presente, conjugado en primera persona): Yo domestico cabras salvajes.', 15, 'domestico.mp3', 44 ]).catch(error => console.log("ItemQuestion ID: 44",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 45, 'domestic??', 'Domestic?? (verbo domesticar en pasado, conjugado en tercera persona): Ella domestic?? una gallina.', 15, 'domestic??.mp3', 45 ]).catch(error => console.log("ItemQuestion ID: 45",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 46, 'n??mero', 'N??mero (Sustantivo): 1, 2, 3, ?? , 0.5 ???', 16, 'n??mero.mp3', 46 ]).catch(error => console.log("ItemQuestion ID: 46",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 47, 'numero', 'Numero (verbo numerar en presente, conjugado en primera persona): Yo numero los libros.', 16, 'numero.mp3', 47 ]).catch(error => console.log("ItemQuestion ID: 47",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 48, 'numer??', 'Numer?? (verbo numerar en pasado, conjugado en tercera persona):  ??l numer?? a los participantes.', 16, 'numer??.mp3', 48 ]).catch(error => console.log("ItemQuestion ID: 48",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 49, 'n??mero', 'N??mero (Sustantivo): 1, 2, 3, ?? , 0.5 ???', 17, 'n??mero.mp3', 49 ]).catch(error => console.log("ItemQuestion ID: 49",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 50, 'numero', 'Numero (verbo numerar en presente, conjugado en primera persona): Yo numero los libros.', 17, 'numero.mp3', 50 ]).catch(error => console.log("ItemQuestion ID: 50",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 51, 'numer??', 'Numer?? (verbo numerar en pasado, conjugado en tercera persona):  ??l numer?? a los participantes.', 17, 'numer??.mp3', 51 ]).catch(error => console.log("ItemQuestion ID: 51",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 52, 'n??mero', 'N??mero (Sustantivo): 1, 2, 3, ?? , 0.5 ???', 18, 'n??mero.mp3', 52 ]).catch(error => console.log("ItemQuestion ID: 52",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 53, 'numero', 'Numero (verbo numerar en presente, conjugado en primera persona): Yo numero los libros.', 18, 'numero.mp3', 53 ]).catch(error => console.log("ItemQuestion ID: 53",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 54, 'numer??', 'Numer?? (verbo numerar en pasado, conjugado en tercera persona):  ??l numer?? a los participantes.', 18, 'numer??.mp3', 54 ]).catch(error => console.log("ItemQuestion ID: 54",error))
    } catch (e) {
      console.log("error insertItemQuestion", e)
    } 

    
  }
  


export default { database, initialize, Dbmigration, openDatabase , executeSql}