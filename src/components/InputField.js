import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

export default function InputField({
  label,
  icon,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  onChangeText,
  onBlur,
  value,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        color: '#666',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
      }}>
      {icon}
        <TextInput
          placeholder={label}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          keyboardType={keyboardType}
          style={{flex: 1, paddingVertical: 0, color: '#666'}}
        />
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{color: '#AD40AF', fontWeight: '700'}}>
          {fieldButtonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
