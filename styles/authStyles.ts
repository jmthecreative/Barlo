import { StyleSheet } from 'react-native';

export const authStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        fontFamily: 'Manrope-Bold',
        color: '#000',
    },
    input: {
        width: '90%',
        height: 45,
        borderColor: '#E0E0E0',
        backgroundColor: '#F9FAFB',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 20,
        paddingHorizontal: 15,
        fontSize: 16,
        fontFamily: 'Manrope-Regular',
        color: '#000',
    },
    linkContainer: {
        marginTop: 20,
    },
    linkText: {
        color: '#1E22FB',
        fontSize: 14,
        fontFamily: 'Manrope-Regular',
    },
}); 