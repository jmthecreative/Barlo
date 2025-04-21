import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.mainContainer}>
      <View style={styles.header}>
        <View style={styles.profilePicPlaceholder} />
        <Text style={styles.logo}>Barlo</Text>
        <Ionicons name="chatbubble-outline" size={24} color="black" />
      </View>

      <View style={styles.tabsContainer}>
        <View style={styles.tabSelector}>
          <View style={styles.tabItemWrapper}>
            <Text style={[styles.tabText, styles.activeTabText]}>Featured</Text>
            <View style={styles.activeTabIndicator} />
          </View>
          <View style={styles.tabItemWrapper}>
            <Text style={styles.tabText}>For You</Text>
          </View>
        </View>
        <View style={styles.tabBorder} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContentContainer}>
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
          <ThemedText type="title" style={styles.cardTitle}>Last week's{`\n`}top trades!</ThemedText>
        </View>

        <View style={styles.liveSection}>
          <View style={styles.collaborationContainer}>
            <ThemedText type="subtitle" style={styles.liveTitle}>Today's Collaborations, Apr 11</ThemedText>
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
        </View>

      </ScrollView>
    </ThemedView>
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
        <ThemedText type="defaultSemiBold" style={styles.listItemTitle}>{title}</ThemedText>
        <ThemedText type="default" style={styles.descriptionText}>{description}</ThemedText>
      </View>
    </View>
    <View style={styles.listItemCount}>
      <Ionicons name="caret-up" size={16} color="black" />
      <ThemedText type="defaultSemiBold" style={styles.listItemCountText}>{count}</ThemedText>
    </View>
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingTop: 55,
  },
  scrollContentContainer: {
    paddingBottom: 120
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
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
    alignSelf: 'center',
    justifyContent: 'space-around',
    width: '74%',
  },
  tabText: {
    fontSize: 14,
    lineHeight: 16,
    color: '#000',
    fontFamily: 'Manrope-Regular',
  },
  activeTabText: {
    color: '#1E22FB',
  },
  activeTabIndicator: {
    position: 'absolute',
    bottom: -1,
    zIndex: 1,
    width: '120%',
    alignSelf: 'center',
    height: 1,
    backgroundColor: '#1E22FB',
  },
  card: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
  },
  cardIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
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
    fontSize: 13,
    marginBottom: 5,
    fontFamily: 'Manrope-Regular',
  },
  cardTitle: {
    fontSize: 18,
    color: '#000',
    lineHeight: 24,
    fontFamily: 'Manrope-Bold',
  },
  liveSection: {
    marginTop: 20,
  },
  liveTitle: {
    fontSize: 16,
    color: '#000',
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 15,
  },
  listItem: {
    backgroundColor: '#F9FAFB',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    width: 60,
    justifyContent: 'center',
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
    marginLeft: -15,
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
  listItemTitle: {
    fontSize: 14,
    fontFamily: 'Manrope-Bold',
    marginBottom: 4,
  },
  descriptionText: {
    color: '#6c757d',
    marginTop: 2,
    fontSize: 12,
    fontFamily: 'Manrope-Regular',
    lineHeight: 15,
  },
  listItemCount: {
    alignItems: 'center',
  },
  listItemCountText: {
    fontSize: 12,
  },
  tabBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    width: '120%',
    left: -20
  },
  tabsContainer: {
    position: 'relative',
    width: '100%',
  },
  tabItemWrapper: {
    position: 'relative',
    paddingBottom: 10,
  },
  collaborationContainer: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    marginTop: 20,
    overflow: 'hidden',
  },
});
