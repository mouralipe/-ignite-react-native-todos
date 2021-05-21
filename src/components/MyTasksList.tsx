import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';
import { useChangeTheme } from '../contexts/ThemeContext';

interface FlatListHeaderComponentProps {
  isDark: boolean;
}

function FlatListHeaderComponent({ isDark }: FlatListHeaderComponentProps) {
  return (
    <View>
      <Text style={isDark ? styles.headerDark : styles.header}>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({ tasks, onLongPress, onPress }: MyTasksListProps) {
  const { isDark } = useChangeTheme();

  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={item.done ? (isDark ? styles.taskButtonDoneDark : styles.taskButtonDone) : styles.taskButton}
            //TODO - use onPress, onLongPress and style props
          >
            <View 
              testID={`marker-${index}`}
              //TODO - use style prop 
              style={item.done ? (isDark ? styles.taskMarkerDoneDark : styles.taskMarkerDone) : (isDark ? styles.taskMarkerDark : styles.taskMarker)}
            />
            <Text 
              //TODO - use style prop
              style={item.done ? (isDark ? styles.taskTextDoneDark :styles.taskTextDone) : (isDark? styles.taskTextDark : styles.taskText)}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent isDark={isDark} />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32,
        backgroundColor: isDark ? '#1F1F1F' : '#eee'
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: 'bold',
  },
  headerDark: {
    color: '#BF4AD4',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: 'bold',
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskMarkerDark: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#12A952',
    marginRight: 10
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskTextDark: {
    color: '#e1e1e6',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskButtonDoneDark: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: '#222222',
    opacity: 0.6,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskMarkerDoneDark: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#12a952',
    marginRight: 10
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  },
  taskTextDoneDark: {
    color: 'rgba(225, 225, 230, 0.6)',
    textDecorationLine: 'line-through'
  }
})