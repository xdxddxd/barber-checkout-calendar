
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbf8f1',
    },
    containerLogo: {
        flex: 1,
        backgroundColor: '#fbf8f1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#fbf8f1',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    containerInput: {
        width: '100%',
        backgroundColor: '#fbf8f1',
        borderRadius: 8,
        marginBottom: 15,
        padding: 10,
    },
    textInput: {
        fontSize: 17,
        color: '#33211b',
    },
    showPasswordButton: {
        position: 'absolute',
        right: 20,
        top: 45,
    },
    input: {
        fontSize: 14,
        color: '#33211b',
        backgroundColor: '#fff',
        borderRadius: 7,
        padding: 5,
        marginTop: 5,
    },
    buttonsView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 15,
        width: '100%',
    },
    loginButton: {
        width: '100%',
        height: 45,
        backgroundColor: '#33211b',
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        paddingVertical: 10,
        alignSelf: 'center',
    },
    textLoginButton: {
        fontSize: 18,
        color: '#fbf8f1',
    },
    moreButtonsView: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    moreButton: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textMoreButton: {
        fontSize: 16,
        color: '#33211b',
    },
});
