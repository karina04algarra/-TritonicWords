import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        backgroundColor: "#DF5BC6",
        flex: 1, 

    },
    
    home: {
        width:30,
        height: 30, 
        position: "absolute",
        left: 25,
        right: 8.33,
        top: 40,
        bottom: 8.33,
    
    },

    question: {
        width:30,
        height: 30, 
        position: "absolute",
        left: 300,
        right: 34,
        top: 40,
        bottom: 24,
    },

    general: {
        position: "absolute",
        width: 150,
        height: 100,
        left: 105,
        top: 80,
        borderRadius: 10,

    },

    subtitle: {
        position: "absolute",
        width: 258,
        height: 55,
        left: 48,
        top: 240,
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 19.5,
        lineHeight: 21,
        textAlign: "center",
        color: "#FFFFFF",
    },

    po:{
        flexDirection: 'row',
        justifyContent: "space-around",
        
    },
    
    containerpo:{
        position: "absolute",
        top: 300,
    },

    btn: {

        width: 40,
        margin: 40,
        borderRadius: 4,
        padding: 10,
//    hace que el segundo grupo de botones se aleje
        marginBottom: 30,
        width: 70,
        height: 65,
        elevation: 2
    
    
    },

    buttonLabel: {
        fontSize: 22,
        fontWeight: "500",
        color: "white",
        textAlign: "center",

    },

    buttonLabelivel: {
        fontSize: 12,
        color: "white",
        textAlign: "center",

    },



});