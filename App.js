import { StatusBar } from 'expo-status-bar';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const photoUrls = [
  require('./assets/Outfits/outfit1.jpg'),
  require('./assets/Outfits/outfit2.jpg'),
  require('./assets/Outfits/outfit3.jpg'),
  require('./assets/Outfits/outfit4.jpg'),
  require('./assets/Outfits/outfit5.jpg'),
  require('./assets/Outfits/outfit6.jpg'),
  require('./assets/Outfits/outfit7.jpg'),
  require('./assets/Outfits/outfit8.jpg'),
  require('./assets/Outfits/outfit9.jpg'),
  require('./assets/Outfits/outfit10.jpg'),
  require('./assets/Outfits/outfit11.jpg'),
  require('./assets/Outfits/outfit12.jpg'),
];

export default function App() {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>

        <Text style={styles.backButton}>‹</Text>

        <View style={styles.headerTitle}>
          <Text style={styles.title}>Group Profile</Text>
          <Text style={styles.username}>ootd_everyday</Text>
        </View>

        <View style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </View>

      </View>

      {/* Scrollable content */}
      <ScrollView>

        {/* Profile section */}
        <View style={styles.profileSection}>

          <View style={styles.profileRow}>

            {/* Profile picture */}
            <View style={styles.profilePictureOuter}>
              <View style={styles.profilePicture}>
                <Text style={styles.profilePictureText}>OO</Text>
                <Text style={styles.profilePictureText}>TD</Text>
              </View>
            </View>

            {/* Statistics */}
            <View style={styles.stats}>

              <View style={styles.stat}>
                <Text style={styles.statNumber}>53</Text>
                <Text style={styles.statLabel}>Posts</Text>
              </View>

              <View style={styles.stat}>
                <Text style={styles.statNumber}>12</Text>
                <Text style={styles.statLabel}>Members</Text>
              </View>

              <View style={styles.stat}>
                <Text style={styles.statNumber}>1</Text>
                <Text style={styles.statLabel}>Admin</Text>
              </View>

            </View>

          </View>

          {/* Description */}
          <View style={styles.description}>
            <Text style={styles.groupName}>OOTD Everyday</Text>
            <Text style={styles.descriptionText}>Fit check! 👕</Text>
            <Text style={styles.descriptionText}>
              You know we'll hype you up.
            </Text>
          </View>

        </View>

        {/* Member Button */}
        <Pressable style={styles.memberButton}>
          <View style={styles.memberContent}>
            <Text style={styles.memberButtonText}>Member</Text>
            <Text style={styles.memberArrow}>⌄</Text>
          </View>
        </Pressable>

        {/* Photo Grid */}
        <View style={styles.photoGrid}>
          {photoUrls.map((url, index) => (
            <Image
              key={index}
              source={url}
              style={styles.photo}
            />
          ))}
        </View>

      </ScrollView>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({

  // Whole screen
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  // Header
  header: {
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },

  backButton: {
    fontSize: 40,
    fontWeight: '300',
    width: 40,
  },

  headerTitle: {
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  username: {
    fontSize: 13,
    color: '#888',
  },

  // + button
  addButton: {
    width: 22,
    height: 22,
    borderWidth: 1.5,
    borderColor: '#555',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButtonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
    lineHeight: 18,
  },

  // Profile section
  profileSection: {
    padding: 15,
  },

  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // Profile picture outer ring
  profilePictureOuter: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 2,
    borderColor: '#e91e63',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },

  // Profile picture
  profilePicture: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: '#1689c7',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profilePictureText: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 20,
  },

  // Statistics
  stats: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 18,
  },

  stat: {
    alignItems: 'center',
    minWidth: 55,
  },

  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  statLabel: {
    fontSize: 13,
    color: '#555',
    marginTop: 4,
  },

  // Description
  description: {
    marginTop: 12,
  },

  groupName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  descriptionText: {
    fontSize: 14,
    color: '#333',
    marginTop: 2,
  },

  // Member Button
  memberButton: {
    height: 30,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 8,
    marginBottom: 15,
  },

  memberContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  memberButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },

  memberArrow: {
    fontSize: 16,
    color: '#555',
    marginLeft: 3,
    marginTop: -3,
  },

  // Photo Grid
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  photo: {
    width: '33.333%',
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: '#ffffff',
  },

});