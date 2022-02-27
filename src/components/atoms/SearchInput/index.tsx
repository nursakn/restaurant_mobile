import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import {colors} from 'constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';

interface IProps {}

const SearchInput: React.FC<IProps> = () => {
  const [text, setText] = useState('');

  // const [focus, setFocus] = useState(false);

  const inputRef = useRef<TextInput>(null);

  const onfocus = () => {};

  const onblur = () => {};

  const focusOn = () => {
    inputRef.current?.focus();
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Search..."
        onFocus={onfocus}
        onBlur={onblur}
        selectionColor={colors.text_main}
      />
      <TouchableOpacity activeOpacity={1} onPress={focusOn}>
        <Icon name="search" size={24} color={colors.main} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  input: {
    fontFamily: 'RedHatDisplay-Regular',
    color: colors.text_main,
    flex: 1,
  },
});
