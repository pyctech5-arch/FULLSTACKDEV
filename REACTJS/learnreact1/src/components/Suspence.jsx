import React from 'react'
import { Suspense,lazy } from 'react';
import Fruits from './Fruits';
const Suspence = () => {
  function App(){
return(
    /*Using Suspense with lazy Loading
Another common use of the Suspense component is when importing components with lazy loading:

In the example above we had to fake a delay of two seconds to see the loading message. A task like displaying three fruits from an array would be too fast to see the loading message at all.

But with lazy loading, we can import a component dynamically, and it will display a loading message while it is loading, even if the task is very fast.

Lets first create an example WITHOUT using lazy loading, where we do not fake a two seconds delay:*/ 

    <div>
    <Suspense fallback={<div>Loading...</div>}>
<Fruits/>
    </Suspense>
    </div>
);
  }
  const Cars1=lazy(()=> import('.//Cars'))
    return (
    <div>
      <App/>
   <Suspense>
    <Cars1/>
   </Suspense>
    </div>
  );
}

export default Suspence;
