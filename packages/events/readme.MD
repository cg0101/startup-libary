```
 *   var source = new EventTarget();
 *   function handleEvent(e) {
 *     alert('Type: ' + e.type + '; Target: ' + e.target);
 *   }
 
 *   source.listen('foo', handleEvent);
 *   source.dispatchEvent('foo');  // will call handleEvent
 *   source.unlisten('foo', handleEvent);
```