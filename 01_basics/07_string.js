const name="Aadarsh"
const age=21

//console.log("My name is " + name + " and my age is " + age)  // concatenation but its not good practice

//console.log(`My name is ${name} and my age is ${age}.`)  // template literals (good practice)

/*
    Functions in strings
    JavaScript String Methods – Use of Each

    FORMATTING / HTML-LIKE (legacy, mostly useless today):
    - anchor(name)          -> Creates an HTML anchor tag
    - big()                 -> Displays text in bigger font
    - blink()               -> Makes text blink (dead feature)
    - bold()                -> Wraps text in <b>
    - fixed()               -> Monospace font display
    - fontcolor(color)      -> Changes text color
    - fontsize(size)        -> Changes font size
    - italics()             -> Wraps text in <i>
    - link(url)             -> Creates clickable link
    - small()               -> Smaller font
    - strike()              -> Strikethrough text
    - sub()                 -> Subscript text
    - sup()                 -> Superscript text

    CHARACTER ACCESS:
    - charAt(index)         -> Character at given index
    - charCodeAt(index)    -> Unicode value of character
    - codePointAt(index)   -> Unicode code point (supports emojis)
    - at(index)             -> Modern alternative to charAt (supports -ve index)
    - [Symbol.iterator]()  -> Allows looping over string characters

    SEARCHING / CHECKING:
    - includes(str, pos)    -> Checks if substring exists
    - indexOf(str, pos)     -> First occurrence index
    - lastIndexOf(str,pos) -> Last occurrence index
    - search(regex)         -> Searches using regex
    - match(regex)          -> Returns matches
    - matchAll(regex)      -> Returns iterator of all matches
    - startsWith(str,pos)  -> Checks starting characters
    - endsWith(str,len)    -> Checks ending characters

    MANIPULATION:
    - concat(strs...)       -> Joins strings
    - slice(start,end)     -> Extracts part (supports -ve)
    - substring(start,end) -> Extracts part (no -ve)  strat and end are index 0 to 3 then 3 is not included
    - substr(start,len)    -> Extracts using length (deprecated)
    - split(sep,limit)     -> Converts string to array (can also do without giving limit)
    - repeat(count)        -> Repeats string
    - replace(old,new)     -> Replaces first match
    - replaceAll(old,new)  -> Replaces all matches
    - padStart(len,pad)    -> Pads at beginning
    - padEnd(len,pad)      -> Pads at end

    CASE CONVERSION:
    - toLowerCase()         -> Converts to lowercase
    - toUpperCase()         -> Converts to uppercase
    - toLocaleLowerCase()  -> Locale-based lowercase
    - toLocaleUpperCase()  -> Locale-based uppercase

    WHITESPACE HANDLING:
    - trim()                -> Removes spaces from both ends
    - trimStart()           -> Removes leading spaces
    - trimEnd()             -> Removes trailing spaces
   

    UNICODE / ENCODING:
    - normalize(form)       -> Normalizes Unicode characters
    - isWellFormed()        -> Checks valid Unicode string
    - toWellFormed()        -> Fixes invalid Unicode

    COMPARISON:
    - localeCompare(str)   -> Compares strings by locale rules

    CONVERSION:
    - toString()            -> Converts to string
    - valueOf()             -> Returns primitive value

    PROPERTY:
    - length                -> Number of characters

    CONSTRUCTOR:
    - String(value)         -> Creates string object
    

*/