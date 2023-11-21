
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems:'center',
        backgroundColor: '#fbf8f1',
        marginTop: 40,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#33211b',
        textAlign: 'center',
    },
    camera: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: 300,
    },
    moreButtonsView: {
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
        fontSize: 18,
        color: '#33211b',
    },
});


