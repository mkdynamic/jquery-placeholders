# jQuery Input Placeholders

A jQuery plugin to add placeholders to form input elements. Webkit provides these functionality natively, this plugin adds this to all browsers.

*If you want placeholders that don't disappear on focus, you might want to checkout my [Inline Labels Plugin](https://github.com/mkdynamic/jquery-inline-labels) instead.*

## Usage instructions

Add this to the HEAD of the document (after you include jQuery, of course):

    <script src="jquery.placeholders.js" type="text/javascript" charset="utf-8"></script>

And add a class 'inline' to every label you wish to act inline:

    <label for="msg" class="inline">Enter your msg...</label>
    <textarea id="msg"></textarea>

When fields are not focused, they will have a `blur` class added to them.

See `demo.html` for an example.

## Credits

Written by Mark Dodwell ([@madeofcode](http://twitter.com/madeofcode))

