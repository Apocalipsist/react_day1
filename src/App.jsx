import Button from './components/Button';
import Navbar from "./components/Navbar";


function App(){
    let myName = 'Paco';
    let myCity = 'Rexburg';
    let buttons= [
        {color:'primary', step:1},
        {color:'secondary', step:10},
        {color:'success', step:100},
        {color:'danger', step:1000},
    ]
    return (
        <>
            <Navbar name={myName} test={123} city={myCity} />
            <div className="container">
                <h1>Hello World</h1>
                <h4>goodbye World</h4>
                {buttons.map((button,idx) => <Button color={button.color} step={button.step} key={idx} />)}
            </div>
        </>
    )
}


// To get emmet abbreviatons use jsx

export default App;