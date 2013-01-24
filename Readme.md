
# css-animation-event-types

CSS animation event types detection. Adds vendor prefix if the browser is not compliant.  

## Installation

    $ component install kewah/css-animation-event-types

## Example

```
var cssAnimEventTypes = require('css-animation-event-types');
 
if(cssAnimEventTypes.start !== undefined) {
  var foo = document.getElementById('foo');
  foo.addEventListener(cssAnimEventTypes.start, onAnimStart, false);
  foo.addEventListener(cssAnimEventTypes.iteration, onAnimIteration, false);
  foo.addEventListener(cssAnimEventTypes.end, onAnimEnd, false);
} else {
  console.log('CSS animation not supported');
}
```

   

## License

  MIT
