import React from 'react';

const Blog = () => {
    return (
        <div className='px-16'>
            <h1 className='text-center font-bold text-2xl text-cyan-300 my-2'>This is question answer page</h1>
            <p className='text-xl my-2 text-purple-500'>01. How will you improve the performance of a React Application?</p>
            <p>Ans:1. Split large size bundles in React app and use them small.br <br />
                2. Large rendering means we will not load all the data at once but will only load as much data as we can on our screen. <br />
                3. We will use the Rest API when we use the React application by scaffolding with the back end. <br />
                4. We can use React Hook, DOM to reduce unnecessary rendering so that our components render unnecessarily.</p>
            <h1 className='text-xl my-2 text-purple-500'>02.What are the different ways to manage a state in a React application?</h1>
            <p>1. Local state. <br />
                2. Global state. <br />
                3. Server state. <br />
                4. Url state.
            </p>
            <h1 className='text-xl my-2 text-purple-500'>03.What is a unit test? Why should write unit tests?</h1>
            <p>When creating a project there are written in the form of many small functions, the test case that is written to test these small modules individually is called a unit test. <br />
                The codes we write when we project have an expected result in them. If it is successful then we get the output or file. We test the units to make them a little stronger and run better. When we work on a project in Borough, if the unit test is written, we change the code there to see if there is any impact on the project.
            </p>
            <h1 className='text-xl my-2 text-purple-500'>04.How does prototypical inheritance work?</h1>
            <p>prototypical inheritance you’re likely familiar with from grade school: all squares are rectangles, but not all rectangles are squares. If we think of this as a JS program, we could say that the rectangle is a prototype of the square: the square inherits all properties of a rectangle (i.e. four sides and closed), while also adding a new feature (i.e. all sides are the same length).

                We could not, however, construct this same concept using the square as a prototype, because there are properties of a square that do not apply to rectangles (i.e. all sides are the same length).

                We can see how prototypal inheritance works on the basis of specifying categories within a group from least specific to most – from rectangle to square. In code, this concept can sometimes be lost in the syntax. If you find this happens, speak the relations between objects and listen to where you draw distinctions. If you hear, “all ___ are , but…not all ___ are”, that is where a new prototypical relationship should be added.</p>
            <h1 className='text-xl my-2 text-purple-500'>05.Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
            <p>Whether or not there will be a state change in an app made with React depends on the user. If the user wants, the state's man change may or may not happen again, so we do not write products = [...] but write setProducts this way.</p>
        </div>
    );
};

export default Blog;