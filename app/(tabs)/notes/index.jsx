// app/(tabs)/notes/index.jsx
import { useState } from 'react';
import { SafeAreaView, FlatList, TouchableOpacity, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { notes } from '../../../data/notes';

const NotesScreen = () => {
  const router = useRouter();

  const renderNote = ({ item }) => (
    <View className="p-4 border-b border-gray-200">
      <Text className="text-lg font-semibold">{item.title}</Text>
      <Text className="text-gray-600 text-sm">{item.description}</Text>
      <Text className="text-sm text-gray-400 mt-1">Uploaded by {item.uploader}</Text>
    </View>
  );

  const handleUpload = () => {
    router.push('/notes/upload');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={renderNote}
      />
      <TouchableOpacity
        onPress={handleUpload}
        className="absolute bottom-4 right-4 bg-blue-500 p-4 rounded-full shadow-lg"
      >
        <Text className="text-white font-semibold">Upload Note</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default NotesScreen;