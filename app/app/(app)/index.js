import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { logout } from '../../lib/auth'
import { useAuth } from '../../contexts/AuthContext'

export default function HomeScreen() {
  const { user } = useAuth()

  async function handleLogout() {
    await logout()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Uriel Guard</Text>
      <Text style={styles.subtitle}>Welcome, {user?.displayName || user?.email}</Text>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 8,
    color: '#111',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
  button: {
    height: 52,
    backgroundColor: '#FF3B30',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
})
