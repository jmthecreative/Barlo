import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.outerContainer}>
      <ThemedView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.profilePicPlaceholder} />
          <Text style={styles.logo}>Barlo</Text>
          <Ionicons name="chatbubble-outline" size={24} color="black" />
        </View>

        <View style={styles.tabSelector}>
          <Text style={[styles.tabText, styles.activeTabText]}>Featured</Text>
          <Text style={styles.tabText}>For You</Text>
        </View>
        <View style={styles.activeTabIndicator} />

        <View style={styles.card}>
          <View style={styles.cardIcons}>
            <View style={[styles.iconContainer, { backgroundColor: '#FADBD8' }]}>
              <View style={[styles.iconInner, { backgroundColor: '#E74C3C' }]} />
            </View>
            <View style={[styles.iconContainer, { backgroundColor: '#FDEBD0' }]}>
              <View style={[styles.iconInnerCircle, { borderColor: '#F39C12' }]} />
            </View>
            <View style={[styles.iconContainer, { backgroundColor: '#E8DAEF' }]}>
              <View style={[styles.iconShape, { backgroundColor: '#8E44AD' }]} />
            </View>
            <View style={[styles.iconContainer, { backgroundColor: '#D1F2EB' }]}>
              <View style={[styles.iconShapeDiamond, { backgroundColor: '#1ABC9C' }]} />
            </View>
          </View>
          <Text style={styles.cardDate}>March 31 - April 6</Text>
          <ThemedText type="title" style={styles.cardTitle}>Last week's top trades!</ThemedText>
        </View>

        <View style={styles.liveSection}>
          <ThemedText type="subtitle" style={styles.liveTitle}>Live Today, Apr 11</ThemedText>
          <LiveListItem
            title="Identity Refresh Playbook"
            description="Landing page for GTM (go-to-market) strategy swap"
            count={42}
            userImages={2}
          />
          <LiveListItem
            title="SoHo Mini-Shoot Collab"
            description="Photo, styling, reels trade for social media content"
            count={35}
            userImages={3}
          />
          <LiveListItem
            title="Brooklyn Pop-Up Squad"
            description="Flyers, beats, and planning for community events"
            count={97}
            userImages={2}
            icon={<View style={[styles.smallIconContainer, { backgroundColor: '#FADBD8' }]}><View style={[styles.smallIconShape, { backgroundColor: '#E74C3C' }]} /></View>}
          />
          <LiveListItem
            title="Teach Me, I'll Build It"
            description="Webflow lessons for podcast site build 😎"
            count={85}
            userImages={2}
          />
        </View>

      </ThemedView>
    </ScrollView>
  );
}

const LiveListItem = ({ title, description, count, userImages, icon }: { title: string, description: string, count: number, userImages: number, icon?: React.ReactNode }) => (
  <View style={styles.listItem}>
    <View style={styles.listItemContent}>
      <View style={styles.userImagesContainer}>
        {icon ? icon : Array.from({ length: userImages }).map((_, index) => (
          <View key={index} style={[styles.userImagePlaceholder, index > 0 && styles.userImageOverlap]} />
        ))}
      </View>
      <View style={styles.listItemText}>
        <ThemedText type="defaultSemiBold">{title}</ThemedText>
        <ThemedText type="default" style={styles.descriptionText}>{description}</ThemedText>
      </View>
    </View>
    <View style={styles.listItemCount}>
      <Ionicons name="caret-up" size={16} color="black" />
      <ThemedText type="defaultSemiBold">{count}</ThemedText>
    </View>
  </View>
);


const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 15,
    paddingHorizontal: 5,
  },
  profilePicPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#A9A9A9',
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'System',
  },
  tabSelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    position: 'relative',
  },
  tabText: {
    paddingBottom: 10,
    fontSize: 16,
    color: '#6c757d',
  },
  activeTabText: {
    color: '#007AFF',
    fontWeight: '600',
  },
  activeTabIndicator: {
    position: 'absolute',
    bottom: -1,
    left: '12.5%',
    width: '25%',
    height: 2,
    backgroundColor: '#007AFF',
    alignSelf: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconInner: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#E74C3C',
    backgroundColor: '#FADBD8',
  },
  iconInnerCircle: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    borderWidth: 5,
    borderColor: '#F39C12',
    backgroundColor: 'transparent',
  },
  iconShape: {
    width: 25,
    height: 25,
    borderRadius: 5,
    transform: [{ rotate: '45deg' }],

  },
  iconShapeDiamond: {
    width: 20,
    height: 20,
    transform: [{ rotate: '45deg' }],

    borderWidth: 5,
    borderColor: '#1ABC9C',
    backgroundColor: '#D1F2EB',
  },
  cardDate: {
    color: '#6c757d',
    fontSize: 14,
    marginBottom: 5,
  },
  cardTitle: {

    color: '#000',
  },
  liveSection: {
    marginTop: 30,
  },
  liveTitle: {

    marginBottom: 15,
    color: '#000',
  },
  listItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  listItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  userImagesContainer: {
    flexDirection: 'row',
    marginRight: 15,
    alignItems: 'center',
  },
  userImagePlaceholder: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#D3D3D3',
    borderWidth: 1,
    borderColor: 'white',
  },
  userImageOverlap: {
    marginLeft: -10,
  },
  smallIconContainer: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#FADBD8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  smallIconShape: {
    width: 15,
    height: 8,
    backgroundColor: '#E74C3C',
    borderRadius: 3,
  },
  listItemText: {
    flex: 1,
  },
  descriptionText: {
    color: '#6c757d',
    marginTop: 2,
  },
  listItemCount: {
    alignItems: 'center',
  },
});
