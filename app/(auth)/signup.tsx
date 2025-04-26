import React, { useState } from 'react';
import { View, Text, Button, TextInput, Alert, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';
import { authStyles } from '../../styles/authStyles';

export default function SignUpScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { signUp } = useAuth();
    const router = useRouter();

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            Alert.alert("Error", "Passwords do not match.");
            return;
        }
        if (password.length < 6) {
            Alert.alert("Error", "Password must be at least 6 characters long.");
            return;
        }

        setLoading(true);
        try {
            await signUp(email, password);
        } catch (error) {
            console.error('Error signing up:', error);
            Alert.alert('Signup Error', (error as Error).message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={authStyles.container}>
            <Text style={authStyles.title}>Sign Up</Text>

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
            <TextInput
                style={authStyles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                autoCapitalize="none"
            />

            <Button title={loading ? "Signing Up..." : "Sign Up"} onPress={handleSignUp} disabled={loading} />

            <Pressable onPress={() => router.replace('/login')} style={authStyles.linkContainer}>
                <Text style={authStyles.linkText}>Already have an account? Log In</Text>
            </Pressable>
        </View>
    );
} 