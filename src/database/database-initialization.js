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
      await executeSql("Insert into Question ( id, quote, itemQuestionCorrectID, levelId) SELECT ?, ?, ?, ? Where Not Exists(Select * From Question Where id = ?)" ,[ 9, 'Él ------- a la niña con rosasea.', 27, 3, 9 ]).catch(error => console.log("Question ID: 9",error))
      await executeSql("Insert into Question ( id, quote, itemQuestionCorrectID, levelId) SELECT ?, ?, ?, ? Where Not Exists(Select * From Question Where id = ?)" ,[ 10, 'La obra tiene un ------- interesante.', 28, 4, 10 ]).catch(error => console.log("Question ID: 10",error))
      await executeSql("Insert into Question ( id, quote, itemQuestionCorrectID, levelId) SELECT ?, ?, ?, ? Where Not Exists(Select * From Question Where id = ?)" ,[ 11, 'Hable con ella, yo ----- con el esposo.', 32, 4, 11 ]).catch(error => console.log("Question ID: 11",error))
      await executeSql("Insert into Question ( id, quote, itemQuestionCorrectID, levelId) SELECT ?, ?, ?, ? Where Not Exists(Select * From Question Where id = ?)" ,[ 12, 'El presidente -------- media hora con nosotros.', 36, 4, 12 ]).catch(error => console.log("Question ID: 12",error))
      await executeSql("Insert into Question ( id, quote, itemQuestionCorrectID, levelId) SELECT ?, ?, ?, ? Where Not Exists(Select * From Question Where id = ?)" ,[ 13, 'El perro es un animal --------', 37, 5, 13 ]).catch(error => console.log("Question ID: 13",error))
      await executeSql("Insert into Question ( id, quote, itemQuestionCorrectID, levelId) SELECT ?, ?, ?, ? Where Not Exists(Select * From Question Where id = ?)" ,[ 14, 'Yo -------- caballos y yeguas.', 41, 5, 14 ]).catch(error => console.log("Question ID: 14",error))
      await executeSql("Insert into Question ( id, quote, itemQuestionCorrectID, levelId) SELECT ?, ?, ?, ? Where Not Exists(Select * From Question Where id = ?)" ,[ 15, 'Ella ------ un loro.', 45, 5, 15 ]).catch(error => console.log("Question ID: 15",error))
      await executeSql("Insert into Question ( id, quote, itemQuestionCorrectID, levelId) SELECT ?, ?, ?, ? Where Not Exists(Select * From Question Where id = ?)" ,[ 16, '¿Cúal es su -------?', 46, 6, 16 ]).catch(error => console.log("Question ID: 16",error))
      await executeSql("Insert into Question ( id, quote, itemQuestionCorrectID, levelId) SELECT ?, ?, ?, ? Where Not Exists(Select * From Question Where id = ?)" ,[ 17, 'Tu escribe el texto y yo lo -----.', 50, 6, 17 ]).catch(error => console.log("Question ID: 17",error))
      await executeSql("Insert into Question ( id, quote, itemQuestionCorrectID, levelId) SELECT ?, ?, ?, ? Where Not Exists(Select * From Question Where id = ?)" ,[ 18, 'La niña------- su diario.', 54, 6, 18 ]).catch(error => console.log("Question ID: 18",error))
    } catch (e) {
      console.log("error insertQuestion", e)
    }

    try {
      // Item
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 1, 'débito', 'Débito (Sustantivo): Cantidad de dinero que se debe pagar.', 1, 'débito.mp3', 1 ]).catch(error => console.log("ItemQuestion ID: 1",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 2, 'debito', 'Debito (verbo debitar en presente, conjugado en primera persona):  Yo debito tu cuenta. ', 1, 'debito.mp3', 2 ]).catch(error => console.log("ItemQuestion ID: 2",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 3, 'debitó', 'Debitó (verbo debitar en pasado, conjugado en tercera persona): Ella debitó su cuenta.', 1, 'debitó.mp3', 3 ]).catch(error => console.log("ItemQuestion ID: 3",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 4, 'débito', 'Débito (Sustantivo): Cantidad de dinero que se debe pagar.', 2, 'débito.mp3', 4 ]).catch(error => console.log("ItemQuestion ID: 4",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 5, 'debito', 'Debito (verbo debitar en presente, conjugado en primera persona):  Yo debito tu cuenta. ', 2, 'debito.mp3', 5 ]).catch(error => console.log("ItemQuestion ID: 5",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 6, 'debitó', 'Debitó (verbo debitar en pasado, conjugado en tercera persona): Ella debitó su cuenta.', 2, 'debitó.mp3', 6 ]).catch(error => console.log("ItemQuestion ID: 6",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 7, 'débito', 'débito (Sustantivo): Cantidad de dinero que se debe pagar.', 3, 'débito.mp3', 7 ]).catch(error => console.log("ItemQuestion ID: 7",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 8, 'debito', 'Debito (verbo debitar en presente, conjugado en primera persona):  Yo debito tu cuenta. ', 3, 'debito.mp3', 8 ]).catch(error => console.log("ItemQuestion ID: 8",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 9, 'debitó', 'Debitó (verbo debitar en pasado, conjugado en tercera persona): Ella debitó su cuenta.', 3, 'debitó.mp3', 9 ]).catch(error => console.log("ItemQuestion ID: 9",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 10, 'depósito', 'Depósito (Sustantivo): Lugar donde se almacenan algunas cosas.', 4, 'depósito.mp3', 10 ]).catch(error => console.log("ItemQuestion ID: 10",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 11, 'deposito', 'Deposito (verbo depositar en presente, conjugado en primera persona): Yo deposito mi dinero en el banco.', 4, 'deposito.mp3', 11 ]).catch(error => console.log("ItemQuestion ID: 11",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 12, 'depositó', 'Depositó (verbo depositar en pasado, conjugado en tercera persona): Él depositó su confianza en usted.', 4, 'depositó.mp3', 12 ]).catch(error => console.log("ItemQuestion ID: 12",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 13, 'depósito', 'Depósito (Sustantivo): Lugar donde se almacenan algunas cosas.', 5, 'depósito.mp3', 13 ]).catch(error => console.log("ItemQuestion ID: 13",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 14, 'deposito', 'Deposito (verbo depositar en presente, conjugado en primera persona): Yo deposito mi dinero en el banco.', 5, 'deposito.mp3', 14 ]).catch(error => console.log("ItemQuestion ID: 14",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 15, 'depositó', 'Depositó (verbo depositar en pasado, conjugado en tercera persona): Él depositó su confianza en usted.', 5, 'depositó.mp3', 15 ]).catch(error => console.log("ItemQuestion ID: 15",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 16, 'depósito', 'Depósito (Sustantivo): Lugar donde se almacenan algunas cosas.', 6, 'depósito.mp3', 16 ]).catch(error => console.log("ItemQuestion ID: 16",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 17, 'deposito', 'Deposito (verbo depositar en presente, conjugado en primera persona): Yo deposito mi dinero en el banco.', 6, 'deposito.mp3', 17 ]).catch(error => console.log("ItemQuestion ID: 17",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 18, 'depositó', 'Depositó (verbo depositar en pasado, conjugado en tercera persona): Él depositó su confianza en usted.', 6, 'depositó.mp3', 18 ]).catch(error => console.log("ItemQuestion ID: 19",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 19, 'diagnóstico', 'Diagnóstico (Sustantivo): Reconocimiento de una enfermedad sobre la base de sus síntomas.', 7, 'diagnóstico.mp3', 19 ]).catch(error => console.log("ItemQuestion ID: 20",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 20, 'diagnostico', 'Diagnostico (verbo diagnosticar en presente, conjugado en primera persona): Yo diagnostico con exámenes.', 7, 'diagnostico.mp3', 20 ]).catch(error => console.log("ItemQuestion ID: 21",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 21, 'diagnosticó', 'Diagnosticó (verbo en pasado, conjugado en tercera persona): Ella le diagnosticó la enfermedad.', 7, 'diagnosticó.mp3', 21 ]).catch(error => console.log("ItemQuestion ID: 22",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 22, 'diagnóstico', 'Diagnóstico (Sustantivo): Reconocimiento de una enfermedad sobre la base de sus síntomas.', 8, 'diagnóstico.mp3', 22 ]).catch(error => console.log("ItemQuestion ID: 23",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 23, 'diagnostico', 'Diagnostico (verbo diagnosticar en presente, conjugado en primera persona): Yo diagnostico con exámenes.', 8, 'diagnostico.mp3', 23 ]).catch(error => console.log("ItemQuestion ID: 24",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 24, 'diagnosticó', 'Diagnosticó (verbo en pasado, conjugado en tercera persona): Ella le diagnosticó la enfermedad.', 8, 'diagnosticó.mp3', 24 ]).catch(error => console.log("ItemQuestion ID: 25",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 25, 'diagnóstico', 'Diagnóstico (Sustantivo): Reconocimiento de una enfermedad sobre la base de sus síntomas.', 9, 'diagnóstico.mp3', 25 ]).catch(error => console.log("ItemQuestion ID: 26",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 26, 'diagnostico', 'Diagnostico (verbo diagnosticar en presente, conjugado en primera persona): Yo diagnostico con exámenes.', 9, 'diagnostico.mp3', 26 ]).catch(error => console.log("ItemQuestion ID: 27",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 27, 'diagnosticó', 'Diagnosticó (verbo en pasado, conjugado en tercera persona): Ella le diagnosticó la enfermedad.', 9, 'diagnosticó.mp3', 27 ]).catch(error => console.log("ItemQuestion ID: 28",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 28, 'diálogo', 'Diálogo (Sustantivo): Conversación, charla o plática entre dos o más personas.', 10, 'diálogo.mp3', 28 ]).catch(error => console.log("ItemQuestion ID: 29",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 29, 'dialogo', 'Dialogo (verbo dialogar en presente, conjugado en primera persona): yo dialogo con el profesor.', 10, 'dialogo.mp3', 29 ]).catch(error => console.log("ItemQuestion ID: 30",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 30, 'dialogó', 'Dialogó (verbo en pasado, conjugado en tercera persona): Él dialogó con las familias.', 10, 'dialogó.mp3', 30 ]).catch(error => console.log("ItemQuestion ID: 31",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 31, 'diálogo', 'Diálogo (Sustantivo): Conversación, charla o plática entre dos o más personas.', 11, 'diálogo.mp3', 31 ]).catch(error => console.log("ItemQuestion ID: 18",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 32, 'dialogo', 'Dialogo (verbo dialogar en presente, conjugado en primera persona): yo dialogo con el profesor.', 11, 'dialogo.mp3', 32 ]).catch(error => console.log("ItemQuestion ID: 32",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 33, 'dialogó', 'Dialogó (verbo en pasado, conjugado en tercera persona): Él dialogó con las familias.', 11, 'dialogó.mp3', 33 ]).catch(error => console.log("ItemQuestion ID: 33",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 34, 'diálogo', 'Diálogo (Sustantivo): Conversación, charla o plática entre dos o más personas.', 12, 'diálogo.mp3', 34 ]).catch(error => console.log("ItemQuestion ID: 34",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 35, 'dialogo', 'Dialogo (verbo dialogar en presente, conjugado en primera persona): yo dialogo con el profesor.', 12, 'dialogo.mp3', 35 ]).catch(error => console.log("ItemQuestion ID: 35",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 36, 'dialogó', 'Dialogó (verbo en pasado, conjugado en tercera persona): Él dialogó con las familias.', 12, 'dialogó.mp3', 36 ]).catch(error => console.log("ItemQuestion ID: 36",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 37, 'doméstico', 'Doméstico (Sustantivo): Persona que trabaja haciendo labores de aseo para una familia.', 13, 'doméstico.mp3', 37 ]).catch(error => console.log("ItemQuestion ID: 37",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 38, 'domestico', 'Domestico (verbo domesticar en presente, conjugado en primera persona): Yo domestico cabras salvajes.', 13, 'domestico.mp3', 38 ]).catch(error => console.log("ItemQuestion ID: 38",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 39, 'domesticó', 'Domesticó (verbo domesticar en pasado, conjugado en tercera persona): Ella domesticó una gallina.', 13, 'domesticó.mp3', 39 ]).catch(error => console.log("ItemQuestion ID: 39",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 40, 'doméstico', 'Doméstico (Sustantivo): Persona que trabaja haciendo labores de aseo para una familia.', 14, 'doméstico.mp3', 40 ]).catch(error => console.log("ItemQuestion ID: 40",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 41, 'domestico', 'Domestico (verbo domesticar en presente, conjugado en primera persona): Yo domestico cabras salvajes.', 14, 'domestico.mp3', 41 ]).catch(error => console.log("ItemQuestion ID: 41",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 42, 'domesticó', 'Domesticó (verbo domesticar en pasado, conjugado en tercera persona): Ella domesticó una gallina.', 14, 'domesticó.mp3', 42 ]).catch(error => console.log("ItemQuestion ID: 42",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 43, 'doméstico', 'Doméstico (Sustantivo): Persona que trabaja haciendo labores de aseo para una familia.', 15, 'doméstico.mp3', 43 ]).catch(error => console.log("ItemQuestion ID: 43",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 44, 'domestico', 'Domestico (verbo domesticar en presente, conjugado en primera persona): Yo domestico cabras salvajes.', 15, 'domestico.mp3', 44 ]).catch(error => console.log("ItemQuestion ID: 44",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 45, 'domesticó', 'Domesticó (verbo domesticar en pasado, conjugado en tercera persona): Ella domesticó una gallina.', 15, 'domesticó.mp3', 45 ]).catch(error => console.log("ItemQuestion ID: 45",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 46, 'número', 'Número (Sustantivo): 1, 2, 3, ¼ , 0.5 …', 16, 'número.mp3', 46 ]).catch(error => console.log("ItemQuestion ID: 46",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 47, 'numero', 'Numero (verbo numerar en presente, conjugado en primera persona): Yo numero los libros.', 16, 'numero.mp3', 47 ]).catch(error => console.log("ItemQuestion ID: 47",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 48, 'numeró', 'Numeró (verbo numerar en pasado, conjugado en tercera persona):  Él numeró a los participantes.', 16, 'numeró.mp3', 48 ]).catch(error => console.log("ItemQuestion ID: 48",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 49, 'número', 'Número (Sustantivo): 1, 2, 3, ¼ , 0.5 …', 17, 'número.mp3', 49 ]).catch(error => console.log("ItemQuestion ID: 49",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 50, 'numero', 'Numero (verbo numerar en presente, conjugado en primera persona): Yo numero los libros.', 17, 'numero.mp3', 50 ]).catch(error => console.log("ItemQuestion ID: 50",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 51, 'numeró', 'Numeró (verbo numerar en pasado, conjugado en tercera persona):  Él numeró a los participantes.', 17, 'numeró.mp3', 51 ]).catch(error => console.log("ItemQuestion ID: 51",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 52, 'número', 'Número (Sustantivo): 1, 2, 3, ¼ , 0.5 …', 18, 'número.mp3', 52 ]).catch(error => console.log("ItemQuestion ID: 52",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 53, 'numero', 'Numero (verbo numerar en presente, conjugado en primera persona): Yo numero los libros.', 18, 'numero.mp3', 53 ]).catch(error => console.log("ItemQuestion ID: 53",error))
      await executeSql("Insert into ItemQuestion ( id, name, learnMore, questionID, sound) SELECT ?, ?, ?, ?, ? Where Not Exists(Select * From ItemQuestion Where id = ?)" ,[ 54, 'numeró', 'Numeró (verbo numerar en pasado, conjugado en tercera persona):  Él numeró a los participantes.', 18, 'numeró.mp3', 54 ]).catch(error => console.log("ItemQuestion ID: 54",error))
    } catch (e) {
      console.log("error insertItemQuestion", e)
    } 

    
  }
  


export default { database, initialize, Dbmigration, openDatabase , executeSql}