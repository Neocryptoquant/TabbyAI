import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const ScheduleScreen = () => {
  const schedules = [
    { id: '1', round: 'Round 1', date: 'May 25, 2025', time: '10:00 AM', location: 'Room A' },
    { id: '2', round: 'Round 2', date: 'May 25, 2025', time: '1:00 PM', location: 'Room B' },
  ];

  const renderSchedule = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.title}>{item.round}</Text>
      <Text style={styles.subtitle}>{item.date} - {item.time}</Text>
      <Text style={styles.location}>{item.location}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tournament Schedule</Text>
      <FlatList
        data={schedules}
        renderItem={renderSchedule}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1F2937',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4F46E5',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  location: {
    fontSize: 12,
    color: '#10B981',
    marginTop: 4,
  },
});

export default ScheduleScreen;