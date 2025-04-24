import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import ChatBubbleIcon from '@/components/ChatBubbleIcon';
import BarloLogo from '@/assets/svgs/BarloLogo';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.mainContainer}>
      <View style={styles.header}>
        <View style={styles.profilePicPlaceholder} />
        <BarloLogo />
        <ChatBubbleIcon />
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
          <Image source={require('@/assets/images/Frame.png')} style={styles.cardImage} />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardDate}>March 31 - April 6</Text>
            <ThemedText type="title" style={styles.cardTitle}>Last week's{`\n`}top trades!</ThemedText>
          </View>
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
            />
            <LiveListItem
              title="Teach Me, I'll Build It"
              description="Webflow lessons for podcast site build 😎"
              count={85}
              userImages={2}
            />
            <LiveListItem
              title="Indie Film Crew Call"
              description="Short film project seeking DP and sound mixer"
              count={61}
              userImages={2}
            />
            <LiveListItem
              title="NFT Art Showcase"
              description="Digital artists collaborating on a virtual gallery"
              count={103}
              userImages={2}
            />
            <LiveListItem
              title="Music Production Jam"
              description="Producers and vocalists creating tracks together"
              count={77}
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
    marginTop: 15,
  },
  profilePicPlaceholder: {
    width: 32,
    height: 32,
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
    position: 'relative',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    marginTop: 20,
    height: 148,
    overflow: 'hidden',
  },
  cardImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cardTextContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
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
