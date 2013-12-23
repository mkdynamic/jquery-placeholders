# jQuery Input Placeholders

A jQuery plugin to add placeholders to form input elements. Webkit provides these functionality natively, this plugin adds this to all browsers.

*If you want placeholders that don't disappear on focus, you might want to checkout my [Inline Labels Plugin](https://github.com/mkdynamic/jquery-inline-labels) instead.*

## Usage instructions

Add this to the HEAD of the document (after you include jQuery, of course):

    <script src="jquery.placeholders.js" type="text/javascript" charset="utf-8"></script>

Just add the placeholder to inputs and the plugin will autoload if needed, depending on browser support. If you need to manually activate the plugin on specific elements that you dynamically add to the DOM, just call `$('el').placeholders()`.

See `demo.html` for an example.

## Credits

Written by Mark Dodwell ([@madeofcode](http://twitter.com/madeofcode))



[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/mkdynamic/jquery-placeholders/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

