import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Link, useRouter } from 'expo-router';

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // TODO: Implement authentication logic
    console.log('Sign In:', { email, password });
    router.push('/home'); // Navigate to Home after login
  };

  return (
    <View className="flex-1 justify-center items-center bg-white p-6">
      <Text className="text-3xl font-bold text-black mb-6">Sign In</Text>
      <TextInput
        className="w-full border border-gray-300 rounded-xl p-4 mb-4"
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        className="w-full border border-gray-300 rounded-xl p-4 mb-4"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={handleSignIn} className="bg-blue-600 p-4 rounded-xl w-full items-center">
        <Text className="text-white font-bold">Sign In</Text>
      </TouchableOpacity>
      <Link href="/auth/sign-up" className="text-blue-600 mt-4">
        Don't have an account? Sign Up
      </Link>
    </View>
  );
};

export default SignIn;
