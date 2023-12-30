import React from 'react';
import {View, Text} from 'react-native';
import {RadioButton, useTheme} from 'react-native-paper';
import {Formik, Field} from 'formik';

const GenderRadioButtons = ({setFieldValue, values}) => {
  const theme = useTheme();

  const handleRadioChange = value => {
    setFieldValue('gender', value);
  };

  return (
    <View style={{flexDirection: 'row', marginBottom: 20}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <RadioButton
          value="male"
          status={values.gender === 'male' ? 'checked' : 'unchecked'}
          onPress={() => handleRadioChange('male')}
          color={theme.colors.primary}
        />
        <Text>Male</Text>
      </View>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginLeft: 20}}>
        <RadioButton
          value="female"
          status={values.gender === 'female' ? 'checked' : 'unchecked'}
          onPress={() => handleRadioChange('female')}
          color={theme.colors.primary}
        />
        <Text>Female</Text>
      </View>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginLeft: 20}}>
        <RadioButton
          value="female"
          status={values.gender === 'other' ? 'checked' : 'unchecked'}
          onPress={() => handleRadioChange('other')}
          color={theme.colors.primary}
        />
        <Text>Other</Text>
      </View>
    </View>
  );
};

export default GenderRadioButtons;
