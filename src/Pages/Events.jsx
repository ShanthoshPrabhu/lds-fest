import React from 'react'
import { useNavigate } from 'react-router-dom';
import Cardquiz from '../Components/CardQuiz';
import Cards from '../Components/CardQuiz'

const Events = () => {
   
    const navigate = useNavigate();
    const handleQuiz = () => {
      navigate("/quiz");
    };
    // const handleJam = () => {
    //   navigate("/jam");
    // };
    // const handleShipwreck = () => {
    //   navigate("/shipwreck");
    // };
    // const handlePoem = () => {
    //   navigate("/poem&microtale");
    // };
    // const handleDumbC = () => {
    //   navigate("/Dumbcharades");
    // };
    // const handlePotpourri = () => {
    //   navigate("/potpourri");
    // };
    // const handleUnominuto = () => {
    //   navigate("/unominuto");
    // };
    // const handleDebate = () => {
    //   navigate("/debate");
    // };
 
 
    

  return (
    <>
    <div className='mt-20'>
        Events
    </div>
    <div className='grid lg:grid-cols-3 gap-10'>
    <button onClick={handleQuiz}><Cardquiz/></button> 
        <button onClick={handleQuiz}><Cardquiz/></button>
            <button onClick={handleQuiz}><Cardquiz/></button> 
    {/* <button onClick={handleShipwreck}><CardShipWreck/></button> 
    <button onClick={handleJam}><CardJam/></button> 
    <button onClick={handlePoem}><CardPoem/></button>
    <button onClick={handlePotpourri}><CardPotpourri/></button>  
    <button onClick={handleUnominuto}><CardUnominuto/></button> 
    <button onClick={handleDumbC}><CardDumbC/></button> 
    <button onClick={handleDebate}><CardPoem/></button>      */}
    </div>
  
    </>
  )
}

export default Events
