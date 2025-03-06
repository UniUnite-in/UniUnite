import React, { useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useAuth } from '../(auth)/authContext';
import { useRouter } from 'expo-router';

const SignIn = () => {
  const { user, signIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/(tabs)/home');
    }
  }, [user]);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    const success = signIn(email, password);
    if (!success) {
      alert('Invalid Credentials');
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-purple-100 p-6">
      <Text className="text-4xl font-bold text-purple-700 mb-6">Welcome Back!</Text>
      <Text className="text-lg text-gray-600 mb-8">Sign in to continue</Text>
      <TextInput
        className="w-3/4 p-3 bg-white rounded-lg shadow mb-4 border border-gray-300"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        className="w-3/4 p-3 bg-white rounded-lg shadow mb-4 border border-gray-300"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity className="bg-purple-600 px-6 py-3 rounded-lg shadow-lg mb-4 w-3/4" onPress={handleLogin}>
        <Text className="text-white text-center text-lg">Sign In</Text>
      </TouchableOpacity>
      <Text className="text-gray-600">Don't have an account?</Text>
      <TouchableOpacity onPress={() => router.push('/sign_up')}>
        <Text className="text-purple-700 font-bold">Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
