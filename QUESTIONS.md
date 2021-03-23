# Questions

Q1: Explain the output of the following code and why

```js
    setTimeout(function() {
      console.log("1");
    }, 100);
    console.log("2");
```
Output: `console.log("2"); console.log("1");`
The `console.log` within the `setTimeout` will be asynchronously executed after 100ms, so the `console.log("2")` occurs first

Q2: Explain the output of the following code and why

```js
    function foo(d) {
      if(d < 10) {
        foo(d+1);
      }
      console.log(d);
    }
    foo(0);
```

Output: `10,9,8,7,6,5,4,3,2,1,0`
While the supplied argument of `d` is less than 10, the function calls itself, each time incrementing the `d` value by one, when the condition is no longer true it then passes the if condition and console logs the value of `d`, due to the way items are added and then removed from the call-stack (last in, first out), the latest value is `10`, and then it continues removing calls and console logging the `d` value.

Q3: If nothing is provided to `foo` we want the default response to be `5`. Explain the potential issue with the following code:

```js
    function foo(d) {
      d = d || 5;
      console.log(d);
    }
```

If the function is provided with `0` as an argument to `d` it would return `5` as the first condition of the OR statement would evaluate to `false`

Q4: Explain the output of the following code and why

```js
    function foo(a) {
      return function(b) {
        return a + b;
      }
    }
    var bar = foo(1);
    console.log(bar(2))
```

Output: `3`
The first time `foo` is called, `bar` gets assigned to the internally returned function, with the value of `a` stored within. The next time `bar` gets called with the argument of `2` that becomes the `b` argument for the function stored within `bar`

Q5: Explain how the following function would be used

```js
    function double(a, done) {
      setTimeout(function() {
        done(a * 2);
      }, 100);
    }
```

It can be used to pass a callback function as a second argument to the `double` method, which then receives the provided `a` argument