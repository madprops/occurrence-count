This extension counts the number of occurrences of a selected word.

It uses this regex: \b{selection}(?![\w-])

So basically a word boundary without counting hyphens "-".

This can be used to determine how many times something matches in the document.

For instance:

```
Client.house 

aaaaaaa bbbbb Client.house.replace("Client.house")
```

If "Client.house" is selected, it Will show a "3 occurrences" message.

To use this, select a word and run the "Count Occurrences" command.

If there is no selection it will not count anything.