import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

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

      {/* Profile section */}
      <View style={styles.profileSection}>

        <View style={styles.profileRow}>

          {/* Profile picture */}
          <View style={styles.profilePicture}>
            <Text style={styles.profilePictureText}>OO</Text>
            <Text style={styles.profilePictureText}>TD</Text>
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

      </View>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

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

addButton: {
  width: 22,
  height: 22,
  borderWidth: 1.5,
  borderColor: '#000000',
  borderRadius: 6,
  justifyContent: 'center',
  alignItems: 'center',
},

addButtonText: {
  fontSize: 17,
  fontWeight: 'bold',
  color: '#0c0c0c',
  lineHeight: 18,
},

  profileSection: {
    padding: 15,
  },

  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  profilePicture: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#1689c7',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profilePictureText: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 20,
  },

  stats: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 15,
  },

  stat: {
    alignItems: 'center',
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

});