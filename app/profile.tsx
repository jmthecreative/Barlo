import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button, Pressable, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import ChatBubbleIcon from '@/components/ChatBubbleIcon';
import { useAuth } from '../context/AuthContext';
import { getAuth, signOut } from 'firebase/auth';

export default function ProfileScreen() {
    const { user, loading } = useAuth();
    const auth = getAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.replace('/(auth)/login');
        }
    }, [user, loading, router]);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            router.replace('/(auth)/login');
        } catch (error) {
            console.error('Error signing out:', error);
            Alert.alert('Sign Out Error', (error as Error).message);
        }
    };

    if (!user) {
        return null;
    }

    return (
        <View style={styles.outerContainer}>
            <View style={styles.header}>
                <Pressable onPress={() => router.back()}>
                    <Ionicons name="chevron-back" size={22} color="#000" />
                </Pressable>
                <ChatBubbleIcon />
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.title}>Profile</Text>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.info}>{user.email || 'Not available'}</Text>
                <Text style={styles.label}>User ID:</Text>
                <Text style={styles.info}>{user.uid}</Text>

                <View style={styles.logoutButtonContainer}>
                    <Button title="Logout" onPress={handleSignOut} color="#FF3B30" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 55,
        paddingHorizontal: 15,
    },
    contentContainer: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        fontFamily: 'Manrope-Bold',
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 15,
        color: '#555',
        fontFamily: 'Manrope-SemiBold',
    },
    info: {
        fontSize: 16,
        marginBottom: 10,
        color: '#000',
        fontFamily: 'Manrope-Regular',
    },
    logoutButtonContainer: {
        marginTop: 40,
        width: '80%',
    },
}); 