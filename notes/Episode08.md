## PART 01
    - Creating class based components 
    - passing props to class based components
## PART 02 
    -creating state for class based components
## PART 03
    -changing state of class based components
    - this object has two properties on it first is a state object that has all the state variables for a particular class component and second is a setState function that is used to change the state object 

## PART 04 && PART 05
    mounting cycle of react class based components
        life cycle of class based component consists of two phases:
            1. Render Phase 
                whenever a class is instansiated first the constructor is called and after it the render function is called
            2. Commit Phase 
                in this phase, we react first updates the DOM and after this it calls the componentDidMount function 

    
    -parent with multiple childern 
        When a parent class component has two or more childern, react batches the render and the commit phases of these childern that means instead of completing the render and commit phase of each separately, react first completes the render phase of all the childern and then completes the commit.
        React does this to  optimization, because DOM manipulation is very expensive task that is why react batches the render and commit phase of each childern 

    -why use componentDidMount()
        it is used to make api calls after rendering the basic structure of the UI using shimmer UI and then fetch the data from the api and update the UI it gives better UX experience 

## PART 06
    -how to make an API call using class based components
    -updating cycle of class component 
        if setState, new Props, forced update 
        - render ()
        - componentDidUpdate() is called 
    - unmounting cycle 
      just the component is unmounted or (removed from the page ) componentWillUnmount is called 

