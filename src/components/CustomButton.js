import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomButton({
  label,
  onPress,
  disabled = false,
  loading = false,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        backgroundColor: disabled ? 'green' : '#AD40AF',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 16,
          color: '#fff',
        }}>
        {loading ? 'Loading...' : label}
      </Text>
    </TouchableOpacity>
  );
}
