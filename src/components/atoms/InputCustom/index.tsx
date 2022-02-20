import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../constants/colors';

interface IProps {
  placeHolder: string;
  onChangeText: (text: string) => void;
  value: string;
  password?: boolean;
}

const InputCustom: React.FC<IProps> = ({
  placeHolder,
  onChangeText,
  value,
  password,
}) => {
  const [secureText, setSecureText] = useState(password ? true : false);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputField}
        placeholder={placeHolder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureText}
      />
      {password && (
        <TouchableOpacity
          onPress={() => setSecureText(!secureText)}
          activeOpacity={1}>
          <Icon
            size={24}
            name={secureText ? 'ios-eye-off-outline' : 'ios-eye-outline'}
            color={colors.main}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputCustom;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: colors.input_background,
    minHeight: 50,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 24,
  },
  inputField: {
    flex: 1,
    fontFamily: 'RedHatDisplay-Regular',
    fontSize: 16,
  },
});
