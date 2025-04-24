import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function CommunityScreen() {
    return (
        <ThemedView style={styles.container}>
            <ThemedText type="title">Community</ThemedText>
            {/* TODO: Implement Community Screen UI */}
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