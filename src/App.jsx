import Navbar from "./components/Navbar";


function App(){
    let myName = 'Paco';
    let myCity = 'Rexburg'
    return (
        <>
            <Navbar name={myName} test={123} city={myCity} />
            <div className="container">
                <h1>Hello World</h1>
                <h4>goodbye World</h4>
            </div>
        </>
    )
}


// To get emmet abbreviatons use jsx

export default App;