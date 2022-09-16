import {useEffect, useState} from "react";

const Upgrades = () => {
    const [upgrades, setUpgrades] = useState([
        {
            name: "Rotzmuliplier",
            cost: 10,
            cps: 1,
            owned: 10,
        },
        {
            name: "Thomas Code Fragen",
            cost: 100,
            cps: 10,
            owned: 3,
        },
    ]);
    useEffect(() => {
        // Access initial value from session storage
        var previousUpgrades = localStorage.getItem("previous_upgrades");
        if (previousUpgrades != null) {
            previousUpgrades = Number(previousUpgrades);
        }
        // Update local storage
        //localStorage.setItem("previous_upgrades", previousUpgrades);

        //just for testing
        localStorage.setItem("previous_upgrades", JSON.stringify(upgrades));

        // setUpgrades(previousUpgrades);
    }, []);

    const renderUpgrades = () => {
        if (upgrades.length > 0) {
            return upgrades.map((upgrade, index) => {
                return (
                    <div key={index} className='flex w-9/10 justify-center p-4 my-2 mx-4 border border-foreground-darker rounded-lg bg-foreground hover:scale-105 transition ease-in-out shadow
                    '>
                        <div className='w-full flex flex-col'>
                            <div className='flex flex-row w-full'>
                                <div>
                                    <h1 className='text-lg  font-semibold drop-shadow-lg decoration-yellow-200 underline underline-offset-4'>
                                        {upgrade.name}
                                    </h1>
                                </div>
                                <div className='ml-auto self-end translate-y-3'>
                                    <a className=' text-xl font-bold '>
                                        {upgrade.cps * upgrade.owned}cps
                                    </a>
                                </div>

                            </div>
                            <div>
                                <a className='text-lg'>
                                    {upgrade.owned} owned
                                </a>
                            </div>

                        </div>

                    </div>
                )


            })
        }
    }


    return (
        <div className='container bg-foreground-dark drop-shadow-lg'>
            <div className={'flex flex-col w-full h-full my-4'}>
                <h1 className='text-5xl self-center font-semibold py-5 text-center drop-shadow-lg'>
                    Upgrades
                </h1>
                <div className='overflow-y-auto'>
                    {
                        renderUpgrades()
                    }
                </div>

            </div>
        </div>
    );
}
export default Upgrades;
