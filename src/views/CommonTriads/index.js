import React, {useEffect, useState} from 'react';
import { View, Text, Modal, Pressable, TouchableOpacity, Image } from 'react-native';
import levelService from '../../services/levelService';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';



import styles from './style';

const CommonTriads = ({route}) => {
    const { id } = route.params;
    const [ level, setLevel ] = useState()
    const [ levels, setLevels ] = useState([])
    const [ question, setQuestion ] = useState()
    const [ counter, setCounter ] = useState(1)
    const [ generalTotalPoints, setGeneralTotalPoints ] = useState(0)
    const [ totalPoints, setTotalPoints ] = useState(0)
    const [ questions, setQuestions ] = useState([])
    const [ itemQuestion, setItemQuestion ] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [modalNoPointVisible, setModalNoPointVisible] = useState(false);
    const navigation = useNavigation();
    const [itemQuestionIndexSuccess, setItemQuestionIndexSuccess] = useState();
    const [itemQuestionIndexBad, setItemQuestionIndexBad] = useState();
    const [titleModal, setTitleModal] = useState("");

    const [sound, setSound] = useState();   
    const [soundList, setSoundList] = useState({

        'debito': require('../../../assets/sounds/debito.mp3'),

        'debitó': require('../../../assets/sounds/debitó.mp3'),

        'débito': require('../../../assets/sounds/débito.mp3'),

        'deposito': require('../../../assets/sounds/deposito.mp3'),

        'depositó': require('../../../assets/sounds/depositó.mp3'),

        'depósito': require('../../../assets/sounds/depósito.mp3'),

        'diagnostico': require('../../../assets/sounds/diagnostico.mp3'),

        'diagnosticó': require('../../../assets/sounds/diagnosticó.mp3'),

        'diagnóstico': require('../../../assets/sounds/diagnóstico.mp3'),

        'dialogo': require('../../../assets/sounds/dialogo.mp3'),

        'dialogó': require('../../../assets/sounds/dialogó.mp3'),

        'diálogo': require('../../../assets/sounds/diálogo.mp3'),

        'domestico': require('../../../assets/sounds/domestico.mp3'),

        'domesticó': require('../../../assets/sounds/domesticó.mp3'),

        'doméstico': require('../../../assets/sounds/doméstico.mp3'),

        'numero': require('../../../assets/sounds/numero.mp3'),

        'numeró': require('../../../assets/sounds/numeró.mp3'),

        'número': require('../../../assets/sounds/número.mp3'),

    });
    


    useEffect(()=> {
        if (id) getLevelById(id)
    },[])

    useEffect(()=> {
        getLevels()
    }, [])

    useEffect(()=> {
        if (level && level.id) getQuestionByLevelId(level.id)
    },[level])

    useEffect(()=> {
        if (question && question.id) getItemQuestionByQuestionId(question.id)
    },[question])

    useEffect (()=>{
        if (totalPoints >= 9) {
            setTitleModal("Congrats")
        } else {
            setTitleModal("You should practice a little more")
        }
    }, [totalPoints])

    useEffect(() => {

        return sound

          ? () => {

              console.log('Unloading Sound');

              sound.unloadAsync(); }

          : undefined;

      }, [sound]);

    async function getLevels() {
        const _levels = await levelService.listLevel()
        if (_levels && _levels.length > 0) setLevels(_levels)
    }

    async function getLevelById(id) {
        const _level = await levelService.listLevelById(id);
        if (_level && _level[0]) setLevel(_level[0])
    }

    async function getQuestionByLevelId(id) {
        const _question = await levelService.listQuestionByLevelId(id);
        if (_question && _question[0]) {
            setQuestion(_question[0])
            setQuestions(_question)
           
            // await levelService.updatePuntosDeUsuario(_question.map(el => el.id).join(', '));
        }
       
    }


    async function getItemQuestionByQuestionId(id) {
        const _itemQuestion = await levelService.listItemQuestionByQuestionId(id);
        if (_itemQuestion && _itemQuestion.length > 0) setItemQuestion(_itemQuestion)
    }

    const handleCheckItemQuestion = (id, index) => {
        if (question && question.itemQuestionCorrectID) {
            if (question.itemQuestionCorrectID === id) {
                setTotalPoints((preTotalPoint) => preTotalPoint + 3)
                setGeneralTotalPoints((preGeneralTotalPoints) => preGeneralTotalPoints + 3)
                setItemQuestionIndexSuccess(index)
            } else {
                setItemQuestionIndexSuccess(itemQuestion.map((item, index) => {
                    if (item.id === question.itemQuestionCorrectID) {
                        console.log("-----", item.id, question.itemQuestionCorrectID)
                        return index;
                    }
                    return null;
                }).filter(item => item !== null)[0]);
                setItemQuestionIndexBad(index)
            }
            const _questions = questions.filter(item => question.id !== item.id)
                setQuestions([..._questions])
                if (_questions.length > 0) {
                    
                    setTimeout(async() => {
                        setQuestion(_questions[0])
                        setItemQuestionIndexSuccess (undefined)
                        setItemQuestionIndexBad (undefined)
                    }, 2000);
                } else {
                    console.log('totalPoints ', totalPoints);
                    // if (counter >= 3) {
                        
                        setModalNoPointVisible(true);
                        
                    /*} else {
                        setCounter(counter + 1)
                    }*/
                }                                                                                                                                                                                                                                                                                                                                                                                              
        }
    }

    const handleNextLevel = () => {
        if (level && level.id) {
            const _levels = levels.filter(item => level.id < item.id)
            setLevels([..._levels])
            if (_levels && _levels.length > 0) {
                setLevel(_levels[0])
                setTotalPoints(0)
                setItemQuestionIndexSuccess(undefined)
                setItemQuestionIndexBad(undefined)
                setModalNoPointVisible(false)
            }
        }
    }

    const handleReturnLevel = async () => {
        if (level && level.id) {
            setModalNoPointVisible(false)
            setGeneralTotalPoints((preGeneralTotalPoints) => preGeneralTotalPoints - totalPoints)
            await getQuestionByLevelId(level.id)
            setTotalPoints(0)
            setItemQuestionIndexSuccess(undefined)
            setItemQuestionIndexBad(undefined)
            setModalNoPointVisible(false)
        }
    }

    async function playSound(file) {

        console.log('Loading Sound');

        if (file && soundList[file.split('.')[0]]) {

            const { sound } = await Audio.Sound.createAsync(soundList[file.split('.')[0]]);

            setSound(sound);

        

            console.log('Playing Sound');

           await sound.playAsync();



           

        } else {

            console.log('Loading Sound Not Found');

        }

     }

    return (
       <View style={  styles.container}>

       {/* Learn More    */}

        <Modal 
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            setModalVisible(!modalVisible);
            }} 
        >
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Palabras tritonicas:</Text>
                <Text style={styles.modalText}>son palabras que tienen la silaba tónica en tres posiciones, su acento es lo que las diferencia.</Text>
                <Text style={styles.modalText}>Ejemplo:</Text>

                {
                    itemQuestion && itemQuestion.length > 0 && itemQuestion.map((row, index) => (
                        <Text key={index} style={styles.modalText}>{row.learnMore}</Text>
                    ))
                }

                {/* <Text style={styles.modalText}>Débito (Sustantivo): Cantidad de dinero que se debe pagar.</Text>
                <Text style={styles.modalText}>Debito (verbo debitar en presente, conjugado en primera persona):  Yo debito tu cuenta. </Text>
                <Text style={styles.modalText}>Debitó (verbo debitar en pasado, conjugado en tercera persona): Ella debitó su cuenta.</Text> */}
                
                <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Return</Text>
            </Pressable>
            </View> 
            </View>
        </Modal>

        {/* Modal Show Error    */}
        <Modal 
            animationType="slide"
            transparent={true}
            visible={modalNoPointVisible}
            onRequestClose={() => {
            setModalNoPointVisible(!modalNoPointVisible);
            
            }} 
        >
            <View style={styles.centereDView}>
            <View style={styles.modaLView}>
            
                <Image  style={ styles.general }
                source={require('../../../assets/commontriads.png')}
                />

                <Text style={styles.texTStyle}>{titleModal}</Text>
                <Text style={styles.texTStyle}>Your Score:</Text>

                <View style={styles.score}>
                <View><AntDesign style={styles.starScore} name="star" size={30} /></View>
                 </View>

                 <Text style={styles.numberScore}> {generalTotalPoints} </Text>
    
                {levels.length === 0 ? (
                    <React.Fragment>
                        <Text style={styles.texTStyle}>Finish Common Triads</Text>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        {totalPoints >= 9 ?

                            <Pressable
                            style={[styles.button, styles.buttoNClose]}
                            onPress={handleNextLevel}
                            >
                                <AntDesign style={styles.return} name="arrowright"   />
                            </Pressable>
                        
                        : <Pressable
                            style={[styles.button, styles.buttoNClose]}
                            onPress={handleReturnLevel}
                        >
                        <Ionicons style={styles.return} name="return-down-back"   />
                        </Pressable>}
                    </React.Fragment>
                )}

                <Pressable
                    style={[styles.button, styles.buttonhome]}
                    onPress={() => {navigation.navigate('SUBLEVELS');}}
                >
                    <AntDesign style={styles.home}  name="home"   />
                   
                </Pressable>
                
            </View> 
            </View>
        </Modal>
           <TouchableOpacity style={ styles.flickr }   onPress={() => {navigation.navigate('SUBLEVELS');}} > 
                <AntDesign name="leftcircleo" size={28} color={"#ffffff"} />
            </TouchableOpacity>
        

        <View style={  styles.rectangule}></View>
        

        <View><AntDesign style={styles.star} name="star" size={24} /></View>

        <Text style={styles.number}> {generalTotalPoints} </Text>

        <TouchableOpacity style={styles.learnmore}  onPress={() => setModalVisible(true)} > 
            <Text style={styles.learnmoretext}> Learn More </Text>
        </TouchableOpacity>

        <View style={styles.titleoval}>
            <Text style={styles.title}>{`Level ${(level && level.levelName) || '0'}`}</Text>
        </View>

        <View style={  styles.rectangulestars}>
        <View style= {styles.rectanguleStarSection}>
        <View><AntDesign style={styles.star1} name="star" size={24} /></View>
        <View><AntDesign style={styles.star1} name="star" size={24} /></View>
        <View><AntDesign style={styles.star1} name="star" size={24} /></View>
        <View><AntDesign style={{...styles.star1, marginLeft: 20}} name="star" size={35} /></View>
        </View>
        <View style={  styles.rectangulebar}></View>
        </View>
        

        
{/* 
        <View> 
            <Text style={styles.phrase}>En mi almohada hay un    _ _ _ _ _ _</Text>
        </View> */}

        <View> 
            <Text style={styles.phrase}>{(question && question.quote) || ''}</Text>
        </View>

        {
            itemQuestion && itemQuestion.length > 0 && itemQuestion.map((row, index) => (
                <View key={index}>
                <View style={styles.po}> 
                <TouchableOpacity style={ styles.iconSound} onPress={() => playSound (row.sound)}> 
                        <AntDesign name="sound" size={24} color="white" />
                        
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleCheckItemQuestion(row.id, index)} style={ itemQuestionIndexSuccess === index ? styles.btnSuccess : itemQuestionIndexBad === index ? styles.btnBad : styles.btn }>
                    <Text style={styles.buttonLabel}>{row.name}</Text> 
                    </TouchableOpacity>
                                        
                    
                </View>
            </View>
            ))
        }

                    
                {/* <View style={styles.po}>
                    <TouchableOpacity  style={[styles.btn, styles.btnBad]}> 
                    <Text style={styles.buttonLabel}>Débito </Text>
                    </TouchableOpacity>
                </View>
                
                    
                <TouchableOpacity style={ styles.icon }  > 
                    <AntDesign name="sound" size={24} color="white" />
                </TouchableOpacity>

        

                    <View style={styles.po}> 
                    <TouchableOpacity style={styles.btn }> 
                    <Text style={styles.buttonLabel}>Debito </Text> 
                    </TouchableOpacity>
                    </View>

                <TouchableOpacity style={ styles.icon }   > 
                    <AntDesign name="sound" size={24} color="white" />
                </TouchableOpacity>
                

                <View style={styles.po}> 
                    <TouchableOpacity style={[styles.btn, styles.btnSuccess]}> 
                    <Text style={styles.buttonLabel}>Debitó </Text> 
                    </TouchableOpacity>
                </View>

                <View><TouchableOpacity style={ styles.icon } > 
            <AntDesign name="sound" size={24} color="white" />
        </TouchableOpacity>
                </View> */}

                    

                

                
        
        

    </View> 
    )
};


export default CommonTriads;


