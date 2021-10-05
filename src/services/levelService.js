import databaseInitialization from "../database/database-initialization";


const listLevel = async () => {
    let result = await databaseInitialization.executeSql("SELECT * FROM Level");
    console.log('listLevel ', result);
    return result;
} 

const listLevelById = async (id) => { // 'SELECT * FROM Level WHERE id = ' + id
  let result = await databaseInitialization.executeSql(`SELECT * FROM Level WHERE id = ${id}`);
  console.log('listLevelById ', result);
  return result;
} 

const listQuestionByLevelId = async (id) => {
  let result = await databaseInitialization.executeSql(`SELECT * FROM Question WHERE levelId = ${id}`);
  console.log('listQuestionByLevelId ', result);
  return result;
} 

const listItemQuestionByQuestionId = async (id) => { 
  let result = await databaseInitialization.executeSql(`SELECT * FROM ItemQuestion WHERE questionID = ${id}`);
  console.log('listItemQuestionByQuestionId ', result);
  return result;
} 

const listAnswerByQuestionId = async (id) => { 
  let result = await databaseInitialization.executeSql(`SELECT * FROM Answer WHERE questionId = ${id}`);
  console.log('result ', result);
  return result;
} 

  export default {  listLevel, listLevelById, listQuestionByLevelId, listItemQuestionByQuestionId, listAnswerByQuestionId }