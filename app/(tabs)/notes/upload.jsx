// app/(tabs)/notes/upload.jsx
import { useState } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { notes } from '../../../data/notes';

const UploadNoteScreen = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleUpload = () => {
    if (title && description) {
      const newNote = {
        id: (notes.length + 1).toString(),
        title,
        description,
        uploader: 'You', // Assuming current user
        file: `path/to/${title.toLowerCase().replace(' ', '_')}.pdf`, // Simulated file path
      };
      notes.push(newNote); // Simulate upload
      router.back();
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-4">Upload Note</Text>
      <TextInput
        className="border border-gray-300 rounded-lg p-2 mb-4"
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        className="border border-gray-300 rounded-lg p-2 mb-4 h-24"
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      {/* In a real app, add a file picker here */}
      <TouchableOpacity onPress={handleUpload} className="bg-blue-500 p-3 rounded-lg">
        <Text className="text-white text-center font-semibold">Upload</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default UploadNoteScreen;