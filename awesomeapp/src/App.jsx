import React from 'react';

import SlotM from './SlotMatch'

const App=()=>{
return<>
<h1>😁Welcome to <span style={{fontWeight:"bold"}}> Slot machine game</span></h1>

<div>
<SlotM x="😍" y="👌" z="👍"></SlotM>
<SlotM x="😍"y="😍"z="😍"></SlotM>
<SlotM x="😍"y="😍"z="👌"></SlotM>
</div>

</>

}

export default App;


