import {useEffect, useState} from "react";

const ClickerWindow = () => {


    const [clicks, setClicks] = useState(0);
    const [upgrades, setUpgrades] = useState([]);
    const [effect, setEffect] = useState(false);

    useEffect(() => {
        // Access initial value from session storage
        var previousClicks = localStorage.getItem("previous_clicks");
        if (previousClicks == null) {
            // Initialize page views count
            previousClicks = 0;
        } else {
            // Increment count
            previousClicks = Number(previousClicks);
        }
        // Update session storage
        localStorage.setItem("previous_clicks", previousClicks);
        setClicks(previousClicks);
       //sleep for 1 second
        setTimeout(() => {

        }, 3000);
        if(setNewUpgrades()){
            console.log("new upgrades successfully set");
            handleCPS()
        }
    }, [])



    const setNewUpgrades = () => {
        let upgrades = localStorage.getItem("previous_upgrades");
        if (upgrades != null) {
            upgrades = JSON.parse(upgrades);
            console.log(upgrades);
            setUpgrades(upgrades);
            return true;
        }
        return false;
    }

    const handleCPS = () => {
        setInterval(() => {
                let cps = 0;
                console.log(upgrades);
                upgrades.forEach((upgrade) => {
                    cps=cps+upgrade.cps*upgrade.owned;
                })
            console.log("adding:"+cps);
                //update the clicks
                setClicks((clicks) => clicks + cps);
            }
            , 1000)
    }

    const handleClick = () => {
        setClicks(clicks + 1);
        localStorage.setItem("previous_clicks", (clicks + 1).toString());
        setEffect(true);
    }


    return (
        <div className='container bg-foreground rounded-l-xl drop-shadow-lg'>
            <div className='flex flex-col justify-center items-center h-full w-full'>
                <div className='w-full text-center'>
                    <h1 className='text-black font-semibold text-5xl pb-4 drop-shadow-lg'>
                        {clicks} Clicks
                    </h1>
                </div>
                <div className='h-5/6 w-full flex justify-center items-center'>
                    <button
                        className={`${
                            effect && "animate-click"
                        } bg-foreground-darker rounded-full h-60 w-60 shadow-highlight shadow-2xl hover:scale-110 transform transition duration-200 ease-in-out`}
                        onClick={() => handleClick()
                        }
                        onAnimationEnd={() => setEffect(false)}/>


                </div>
            </div>
        </div>
    );
}
export default ClickerWindow;
