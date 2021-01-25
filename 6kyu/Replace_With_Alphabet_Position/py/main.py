def alphabet_position(text):
    alphabet = 'abcdefghijklmnoqrstuvwxyz'
    string = ""
    for i in range(len(text)):
        for y in range(len(alphabet)):
            if text[i] == alphabet[y]:
                string += " " + str(y + 1)


alphabet_position("aBc dE")
