import React, { useEffect } from 'react';
import { Redirect, useRootNavigationState } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

import { useAuth } from '../context/AuthContext';

SplashScreen.preventAutoHideAsync();

export default function IndexRedirect() {
    const { user, loading: authLoading } = useAuth();
    const navigationState = useRootNavigationState();

    useEffect(() => {
        if (navigationState?.key && !authLoading) {
            SplashScreen.hideAsync();
        }
    }, [navigationState?.key, authLoading]);

    if (!navigationState?.key || authLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (user) {
        return <Redirect href="/(app)" />;
    } else {
        return <Redirect href="/(auth)/login" />;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
}); 