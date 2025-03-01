import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useAuth } from './authContext';
import { useRouter } from 'expo-router';

const SignUp = () => {
  const { signUp } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    signUp(email, password);
    router.push('/(tabs)/home');
  };

  return (
    <View className=" flex-1 justify-center items-center px-4">
      <Text className="text-3xl font-bold mb-6">Sign Up</Text>
      <TextInput
        className="w-1/2 p-3 mb-3 bg-gray-100 rounded"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        className="w-1/2 p-3 mb-3 bg-gray-100 rounded"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        className="w-1/8 bg-purple-600 p-3 rounded"
        onPress={handleSignUp}
      >
        <Text className="text-white text-center">Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
