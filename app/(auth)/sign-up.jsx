import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Link, useRouter } from 'expo-router';

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // TODO: Implement authentication logic
    console.log('Sign Up:', { email, password });
    router.push('/home'); // Navigate to Home after registration
  };

  return (
    <View className="flex-1 justify-center items-center bg-white p-6">
      <Text className="text-3xl font-bold text-black mb-6">Sign Up</Text>
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
      <TextInput
        className="w-full border border-gray-300 rounded-xl p-4 mb-4"
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity onPress={handleSignUp} className="bg-green-600 p-4 rounded-xl w-full items-center">
        <Text className="text-white font-bold">Sign Up</Text>
      </TouchableOpacity>
      <Link href="/auth/sign-in" className="text-blue-600 mt-4">
        Already have an account? Sign In
      </Link>
    </View>
  );
};

export default SignUp;
