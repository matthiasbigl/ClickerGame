import {useEffect, useState} from "react";

const ClickerWindow = () => {


    const [clicks, setClicks] = useState(0);

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
    }, [])

    const handleClick = () => {
        setClicks(clicks + 1);
        localStorage.setItem("previous_clicks", (clicks + 1).toString());
    }




    return (
        <div className='container bg-foreground rounded-l-xl drop-shadow-lg'>
            <div className='flex flex-col justify-center items-center h-full w-full'>
                <div className='w-full text-center'>
                    <h1 className='text-black font-semibold text-5xl pb-4 drop-shadow-xl'>
                        {clicks} Clicks
                    </h1>
                </div>
                <div className='h-5/6 w-full flex justify-center items-center'>
                    <button
                        className='bg-foreground-darker rounded-full h-60 w-60 shadow-highlight shadow-2xl hover:scale-110 transform transition duration-200 ease-in-out'
                        onClick={() => handleClick()
                    }
                    />


                </div>
            </div>
        </div>
    );
}
export default ClickerWindow;
