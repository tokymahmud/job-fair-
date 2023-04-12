import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center'>
            When should you use context API?
            </h1>
            <p>Its used when some data needs to be accessible by many components at different nesting levels.Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.It provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree. Context API is a built-in React tool that does not influence the final bundle size, and is integrated by design.</p>


            <h1 className='text-center'>
            What is a custom hook?

            </h1>
            <p>Its a js function whose name starts with ”use” and that may call other Hooks.Hooks are reusable functions. When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook. </p>
            <h1 className='text-center'>
            What is useRef?

            </h1>
            <p>Its a built in  react hook.It accepts one argument as the initial value and returns a reference.It allows to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated. </p>
            <h1 className='text-center'>
            What is useMemo?

            </h1>
            <p>React useMemo Hook returns a memoized value.This is a higher-order component that wraps around a component to memoize the rendered output and avoid unnecessary renderings.useMemo is a React Hook that lets you cache the result of a calculation between re-renders. const cachedValue = useMemo(calculateValue, dependencies) Reference. useMemo(calculateValue, dependencies)</p>
           
        </div>
    );
};

export default Blog;