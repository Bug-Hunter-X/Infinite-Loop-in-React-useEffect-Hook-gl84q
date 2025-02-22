# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving the `useEffect` hook. The component experiences an infinite render loop due to improper usage of the dependency array. 

## Bug Description

The `useEffect` hook in `bug.js` lacks a proper dependency array, causing it to run after every render. This continuous execution, in conjunction with the state update within the effect, leads to an infinite loop. 

## Solution

The solution in `bugSolution.js` addresses this issue by correctly specifying the dependency array. By including `count` in the dependency array, `useEffect` only runs when the `count` state changes, resolving the infinite loop.