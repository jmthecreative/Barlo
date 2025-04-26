import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';
import { authStyles } from '../../styles/authStyles';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { signIn } = useAuth();
    const router = useRouter();

    const handleLogin = async () => {
        setLoading(true);
        try {
            await signIn(email, password);
            router.replace('/(app)');
        } catch (error) {
            console.error('Error logging in:', error);
            Alert.alert('Login Error', (error as Error).message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={authStyles.container}>
            <Text style={authStyles.title}>Log In</Text>
            <TextInput
                style={authStyles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={authStyles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
            />
            <Button title={loading ? 'Logging In...' : 'Login'} onPress={handleLogin} disabled={loading} />
            <Pressable onPress={() => router.push('/signup')} style={authStyles.linkContainer}>
                <Text style={authStyles.linkText}>Don't have an account? Sign Up</Text>
            </Pressable>
        </View>
    );
} 