import Button from '@mui/material/Button';


import CustomButton from '../components_mui_based/CustomButton';

function GameControls(props)
{
    // TYPE       - user's type
    // GAME STATE - selecting questions/answering question


    if(props.type=="HOST")
    {
        return(
            <div className="Controls-box Host">
                <CustomButton>CHANGE SCORE</CustomButton>
                <CustomButton>NEXT ROUND</CustomButton>
                <CustomButton><i className="fa-solid fa-pause"></i></CustomButton>
                <CustomButton><i className="fa-solid fa-right-from-bracket"></i></CustomButton>
            </div>   
        )
    }
    else
    {
        return(
            <div className="Controls-box Player">
                <CustomButton>ANSWER</CustomButton>
                <CustomButton><i className="fa-solid fa-pause"></i></CustomButton>
                <CustomButton><i className="fa-solid fa-right-from-bracket"></i></CustomButton>

            </div>   
        )
    }



}
export default GameControls;