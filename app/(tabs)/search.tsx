import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function SearchScreen() {
    return (
        <ThemedView style={styles.container}>
            <ThemedText type="title">Search</ThemedText>
            {/* TODO: Implement Search Screen UI */}
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
}); 