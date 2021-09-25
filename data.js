const questions = [
    {
        questionText: "What is the description of charAt()?",
        answerOptions: [
            { answerText: "	Checks whether a string ends with specified string/characters", isCorrect: false },
            { answerText: "Joins two or more strings, and returns a new joined strings", isCorrect: false },
            { answerText: "Returns the character at the specified index (position)", isCorrect: true },
            { answerText: "Returns the Unicode of the character at the specified index", isCorrect: false },
        ],
    },
    {
        questionText: "What is the description of charCodeAt()?",
        answerOptions: [
            { answerText: "	Checks whether a string ends with specified string/characters", isCorrect: false },
            { answerText: "Joins two or more strings, and returns a new joined strings", isCorrect: false },
            { answerText: "Returns the character at the specified index (position)", isCorrect: false },
            { answerText: "Returns the Unicode of the character at the specified index", isCorrect: true },
        ],
    },
    {
        questionText: "What is the description of concat()?",
        answerOptions: [
            { answerText: "	Checks whether a string ends with specified string/characters", isCorrect: false },
            { answerText: "Joins two or more strings, and returns a new joined strings", isCorrect: true },
            { answerText: "Returns the character at the specified index (position)", isCorrect: false },
            { answerText: "Returns the Unicode of the character at the specified index", isCorrect: false },
        ],
    },
    {
        questionText: "What is the description of endsWith()?",
        answerOptions: [
            { answerText: "	Checks whether a string ends with specified string/characters", isCorrect: true },
            { answerText: "Joins two or more strings, and returns a new joined strings", isCorrect: false },
            { answerText: "Returns the character at the specified index (position)", isCorrect: false },
            { answerText: "Returns the Unicode of the character at the specified index", isCorrect: false },
        ],
    },
    {
        questionText: "What is the description of fromCharCode()",
        answerOptions: [
            { answerText: "Converts Unicode values to characters", isCorrect: true },
            { answerText: "Checks whether a string contains the specified string/characters", isCorrect: false },
            { answerText: "Returns the position of the first found occurrence of a specified value in a string", isCorrect: false },
            { answerText: "Returns the position of the last found occurrence of a specified value in a string", isCorrect: false },
        ],
    },
    {
        questionText: "What is the description of includes()",
        answerOptions: [
            { answerText: "Converts Unicode values to characters", isCorrect: false },
            { answerText: "Checks whether a string contains the specified string/characters", isCorrect: true },
            { answerText: "Returns the position of the first found occurrence of a specified value in a string", isCorrect: false },
            { answerText: "Returns the position of the last found occurrence of a specified value in a string", isCorrect: false },
        ],
    },
    {
        questionText: "What is the description of indexOf()",
        answerOptions: [
            { answerText: "Converts Unicode values to characters", isCorrect: false },
            { answerText: "Checks whether a string contains the specified string/characters", isCorrect: false },
            { answerText: "Returns the position of the first found occurrence of a specified value in a string", isCorrect: true },
            { answerText: "Returns the position of the last found occurrence of a specified value in a string", isCorrect: false },
        ],
    },
    {
        questionText: "What is the description of lastIndexOf()",
        answerOptions: [
            { answerText: "Converts Unicode values to characters", isCorrect: false },
            { answerText: "Checks whether a string contains the specified string/characters", isCorrect: false },
            { answerText: "Returns the position of the first found occurrence of a specified value in a string", isCorrect: false },
            { answerText: "Returns the position of the last found occurrence of a specified value in a string", isCorrect: true },
        ],
    },
    {
        questionText: "What is the description of localeCompare()",
        answerOptions: [
            { answerText: "Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced", isCorrect: false },
            { answerText: "Returns a new string with a specified number of copies of an existing string", isCorrect: false },
            { answerText: "Searches a string for a match against a regular expression, and returns the matches", isCorrect: false },
            { answerText: "Compares two strings in the current locale", isCorrect: true },
        ],
    },
    {
        questionText: "What is the description of match()",
        answerOptions: [
            { answerText: "Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced", isCorrect: false },
            { answerText: "Returns a new string with a specified number of copies of an existing string", isCorrect: false },
            { answerText: "Searches a string for a match against a regular expression, and returns the matches", isCorrect: true },
            { answerText: "Compares two strings in the current locale", isCorrect: false },
        ],
    },
    {
        questionText: "What is the description of repeat()",
        answerOptions: [
            { answerText: "Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced", isCorrect: false },
            { answerText: "Returns a new string with a specified number of copies of an existing string", isCorrect: true },
            { answerText: "Searches a string for a match against a regular expression, and returns the matches", isCorrect: false },
            { answerText: "Compares two strings in the current locale", isCorrect: false },
        ],
    },
    {
        questionText: "What is the description of replace()",
        answerOptions: [
            { answerText: "Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced", isCorrect: true },
            { answerText: "Returns a new string with a specified number of copies of an existing string", isCorrect: false },
            { answerText: "Searches a string for a match against a regular expression, and returns the matches", isCorrect: false },
            { answerText: "Compares two strings in the current locale", isCorrect: false },
        ],
    },
    {
        questionText: "What is the description of search()",
        answerOptions: [
            { answerText: "Searches a string for a specified value, or regular expression, and returns the position of the match", isCorrect: true },
            { answerText: "Extracts a part of a string and returns a new string", isCorrect: false },
            { answerText: "Splits a string into an array of substrings", isCorrect: false },
            { answerText: "	Checks whether a string begins with specified characters", isCorrect: false },
        ],
    },
    {
        questionText: "What is the description of slice()",
        answerOptions: [
            { answerText: "Searches a string for a specified value, or regular expression, and returns the position of the match", isCorrect: false },
            { answerText: "Extracts a part of a string and returns a new string", isCorrect: true },
            { answerText: "Splits a string into an array of substrings", isCorrect: false },
            { answerText: "	Checks whether a string begins with specified characters", isCorrect: false },
        ],
    },
    {
        questionText: "What is the description of split()",
        answerOptions: [
            { answerText: "Searches a string for a specified value, or regular expression, and returns the position of the match", isCorrect: false },
            { answerText: "Extracts a part of a string and returns a new string", isCorrect: false },
            { answerText: "Splits a string into an array of substrings", isCorrect: true },
            { answerText: "	Checks whether a string begins with specified characters", isCorrect: false },
        ],
    },
    {
        questionText: "What is the description of startsWith()",
        answerOptions: [
            { answerText: "Searches a string for a specified value, or regular expression, and returns the position of the match", isCorrect: false },
            { answerText: "Extracts a part of a string and returns a new string", isCorrect: false },
            { answerText: "Splits a string into an array of substrings", isCorrect: false },
            { answerText: "Checks whether a string begins with specified characters", isCorrect: true },
        ],
    },
    {
        questionText: "What is the description of substr()",
        answerOptions: [
            { answerText: "Extracts the characters from a string, beginning at a specified start position, and through the specified number of character", isCorrect: true },
            { answerText: "Extracts the characters from a string, between two specified indices", isCorrect: false },
            { answerText: "Converts a string to lowercase letters, according to the host's locale", isCorrect: false },
            { answerText: "Converts a string to uppercase letters, according to the host's locale", isCorrect: false },
        ],
    },
    {
        questionText: "What is the description of substring()",
        answerOptions: [
            { answerText: "Extracts the characters from a string, beginning at a specified start position, and through the specified number of character", isCorrect: false },
            { answerText: "Extracts the characters from a string, between two specified indices", isCorrect: true },
            { answerText: "Converts a string to lowercase letters, according to the host's locale", isCorrect: false },
            { answerText: "Converts a string to uppercase letters, according to the host's locale", isCorrect: false },
        ],
    },
    {
        questionText: "What is the description of toLocaleLowerCase()",
        answerOptions: [
            { answerText: "Extracts the characters from a string, beginning at a specified start position, and through the specified number of character", isCorrect: true },
            { answerText: "Extracts the characters from a string, between two specified indices", isCorrect: false },
            { answerText: "Converts a string to lowercase letters, according to the host's locale", isCorrect: true },
            { answerText: "Converts a string to uppercase letters, according to the host's locale", isCorrect: false },
        ],
    },
    {
        questionText: "What is the description of toLocaleUpperCase()",
        answerOptions: [
            { answerText: "Extracts the characters from a string, beginning at a specified start position, and through the specified number of character", isCorrect: false },
            { answerText: "Extracts the characters from a string, between two specified indices", isCorrect: false },
            { answerText: "Converts a string to lowercase letters, according to the host's locale", isCorrect: false },
            { answerText: "Converts a string to uppercase letters, according to the host's locale", isCorrect: true },
        ],
    },
    {
        questionText: "What is the description of toLowerCase()",
        answerOptions: [
            { answerText: "Converts a string to lowercase letters", isCorrect: true },
            { answerText: "Returns the value of a String object", isCorrect: false },
            { answerText: "Converts a string to uppercase letters", isCorrect: false },
            { answerText: "Removes whitespace from both ends of a string", isCorrect: false },
        ],
    },
    {
        questionText: "What is the description of toString()",
        answerOptions: [
            { answerText: "Converts a string to lowercase letters", isCorrect: false },
            { answerText: "Returns the value of a String object", isCorrect: true },
            { answerText: "Converts a string to uppercase letters", isCorrect: false },
            { answerText: "Removes whitespace from both ends of a string", isCorrect: false },
        ],
    },
    {
        questionText: "What is the description of toUpperCase()",
        answerOptions: [
            { answerText: "Converts a string to lowercase letters", isCorrect: false },
            { answerText: "Returns the value of a String object", isCorrect: false },
            { answerText: "Converts a string to uppercase letters", isCorrect: true },
            { answerText: "Removes whitespace from both ends of a string", isCorrect: false },
        ],
    },
    {
        questionText: "What is the description of trim()",
        answerOptions: [
            { answerText: "Converts a string to lowercase letters", isCorrect: false },
            { answerText: "Returns the value of a String object", isCorrect: false },
            { answerText: "Converts a string to uppercase letters", isCorrect: false },
            { answerText: "Removes whitespace from both ends of a string", isCorrect: true },
        ],
    },
    {
        questionText: "What is the description of valueOf()",
        answerOptions: [
            { answerText: "Checks whether a string contains the specified string/characters", isCorrect: false },
            { answerText: "	Returns the position of the last found occurrence of a specified value in a string", isCorrect: false },
            { answerText: "Searches a string for a match against a regular expression, and returns the matches", isCorrect: false },
            { answerText: "Returns the primitive value of a String object", isCorrect: true },
        ],
    },

]