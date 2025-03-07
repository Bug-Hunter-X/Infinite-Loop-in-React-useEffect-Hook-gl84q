```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only when the count state changes
    console.log('Count:', count);
    return () => {
      // Cleanup function (optional)
      console.log('Cleanup');
    };
  }, [count]); // The dependency array is crucial here

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```