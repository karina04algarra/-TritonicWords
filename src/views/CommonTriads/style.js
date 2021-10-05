import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
    container: {
        backgroundColor: "#A97CFB",
        flex: 1, 

    },

    flickr: {
        width:30,
        height: 30, 
        left: 23,
        right: 8.33,
        top: 45,
    
    },

    rectangule: {
        backgroundColor: "#ffffff",
        marginHorizontal: 30,
        borderRadius: 5,
        top: 10,
        left: 37,
        height: 40,
        width: 120,
        textAlign: "center",
    },

    star: {
        left: 85,
        bottom: 20,
        lineHeight: 21,
        color: "#F5CF0B",
        
    },

    number: {
        left: 145,
        fontSize: 24,
        bottom: 42,
        lineHeight: 25,
        color: "#F5CF0B",
        fontWeight: "bold"
    },

    learnmore: {
        left: 200,
        bottom: 80,
        width: 143,
        borderRadius: 20,
        borderStyle: "solid", 
        borderColor: "#71B6FB",
        borderWidth: 2,
        padding: 5
        
    },

    learnmoretext: {
        color: "#ffffff",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 19,
        textAlign: "center",
        
    },

    // estilos boton show error
    showerror: {
        left: 200,
        bottom: 80,
        width: 143,
        borderRadius: 20,
        borderStyle: "solid", 
        borderColor: "#71B6FB",
        borderWidth: 2,
        padding: 5
        
    },

    testext: {
        color: "#ffffff",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 19,
        textAlign: "center",
        
    },

    titleoval: {
        backgroundColor: "#ffffff",
        borderRadius: 10,
        padding: 17,
        marginHorizontal: 30,
        width: 120,
        left: 80,
        height: 0,
        bottom: 40,
        
    },

    title: {
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 21,
        color: "#7721F9",
        bottom: 13,
        textAlign: "center",
    },

    rectanguleStarSection: {
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        justifyContent: "center"

    },

    rectangulestars: {
        backgroundColor: "rgba(189, 180, 246, 0.40)", 
        marginHorizontal: 30,
        borderRadius: 5,
        bottom: 20,
        left: 30,
        height: 70,
        width: 249,
        textAlign: "center",
        
    },

    star1: {
        // left: 80,
        // bottom: 75,
        // lineHeight: 21,
        color: "#F5CF0B",
        padding: 3
    
    },

    

    rectangulebar: {
        backgroundColor: "#ffffff",
        marginHorizontal: 30,
        borderRadius: 3,
        
        // left: 40,
        height: 8,
        width: 190,
        
    },
    phrase: {
        width: wp('84.5%'),
        // bottom: 95,
        // height: hp('17%'),
        left: 53,
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 18,
        // lineHeight: 21,
        color: "#ffffff",
        marginBottom: 50
    },


    po:{

        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
        marginBottom: 10,
        
    },

    btn: {
        width: wp('40%'),
        height: hp('8%'),
        borderRadius: 20,
        backgroundColor: "#71B6FB" ,
        // marginBottom: 10,
        elevation: 2,
        padding: 5,
        justifyContent: 'center'
        
    
    },

    btnSuccess: {
        width: wp('40%'),
        height: hp('8%'),
        borderRadius: 20,
        backgroundColor: "#ABE89C" ,
            //    marginBottom: 10,
        elevation: 2,
        padding: 5,
        justifyContent: 'center'
    
    },

    btnBad: {
        width: wp('40%'),
        height: hp('8%'),
        borderRadius: 20,
        backgroundColor: "#C24957",
        // marginBottom: 10,
        elevation: 2,
        padding: 5,
        justifyContent: 'center'
    },
    

    buttonLabel: {
        // width: 20,
        // height: 20,
        // borderRadius: 20,
        fontSize: 20,
       textAlign: "center",
        fontWeight: "500",
        color: "white",
        

    },

    iconSound: {
        // padding: 20,
        marginRight: 20,
        borderColor: "#ffffff",
        
        // justifyContent: 'center'
    
    
    },

    // Modal Learn More
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "auto",
        padding: 10,
    },
        modalView: {
        height: "100%",
        backgroundColor: "rgba(189, 180, 246, 0.95)", 
        borderRadius: 20,
        padding: 34,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
        button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2
    },
        buttonOpen: {
        // backgroundColor: "#F194FF",
    },
        buttonClose: {
            backgroundColor: "#2196F3",
            left: 65,
            top: 8
        },
        textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
        },
        modalText: {
            marginBottom: 15,
            textAlign: "center",
            textAlign: "justify",
            // color: "#244BF7",
            fontWeight: "bold",
            fontSize: 16,
            color: "#4F834B"
        
        
        },


    // Modal show error

    general: {
        position: "absolute",
        width: 160,
        height: 90,
        justifyContent: "center",
        left: 100,
        top: 50,
        borderRadius: 10,
            
    },

    score: {
        backgroundColor: "#ffffff",
        borderRadius: 20,
        padding: 17,
        marginHorizontal: 30,
        width: 160,
        height: 70,
        top: 230,
        
    },

    starScore: {
        left: 10,
        top: 5,
        lineHeight: 28,
        color: "#F5CF0B",
    },

    numberScore: {
        left: 40,
        fontSize: 30,
        top: 172,
        color: "#4F834B",
        fontWeight: "bold"
    },

    centereDView: {
        flex: 1,
        height: "100%",
     },
    
    modaLView: {
        height: "100%",
        backgroundColor: "#244BF7", 
        alignItems: "center",
        
    },
        button: {
            borderRadius: 10,
            padding: 10,
            elevation: 2
        },
    
        buttoNClose: {
            backgroundColor: " linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)),",
            left: 65,
            top: 270,
            width: 87,
        },

        return : {
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 30,
            color: "#ffffff",
            

        },

        buttonhome: {
            backgroundColor: "#F95B02",
            top: 220,
            width: 87,
            right: 80,
            

        },

        home: {
            textAlign: "center",
            fontSize: 30,
            color: "#ffffff",
            elevation: 2,

        },
        
        texTStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            top: 195,
            fontSize: 24,
            padding: 5
            
        },
        modaLText: {
            marginBottom: 15,
            textAlign: "center",
            textAlign: "justify",
            // color: "#244BF7",
            fontWeight: "bold",
            fontSize: 16,
            color: "#4F834B",
        
        }




});