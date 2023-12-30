import {Field} from 'formik';
import {validateType} from '../utils/validations';
import {View, Text, TextInput} from 'react-native';

const PrimaryInput = ({
  icon,
  keyboardType,
  placeholder,
  name = 'name',
  disabled = false,
  validate = validateType,
  onChangeText,
  onBlur,
  value,
}) => {
  return (
    <Field name={name} validate={validate}>
      {({field, form}) => (
        <View
          style={{
            paddingBottom: 8,
            marginBottom: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              borderBottomColor: '#ccc',
              color: '#666',
              borderBottomWidth: 1,
              paddingBottom: 8,
            }}>
            {icon}
            {name == 'phoneNumber' && (
              <Text
                style={{
                  marginRight: 5,
                  marginTop: 2,
                }}>
                +91
              </Text>
            )}
            <TextInput
              onChangeText={onChangeText}
              onBlur={onBlur}
              value={value}
              placeholder={placeholder}
              keyboardType={keyboardType}
              style={{flex: 1, paddingVertical: 0, color: 'black'}}
              disabled={disabled}
            />
          </View>
          <Text
            style={{
              paddingBottom: 8,
              color: 'red',
              fontSize: 12,
            }}>
            {form.errors[`${name}`]}
          </Text>
        </View>
      )}
    </Field>
  );
};

export default PrimaryInput;
