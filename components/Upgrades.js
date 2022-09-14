import {useEffect, useState} from "react";

const Upgrades = () => {
    const [upgrades, setUpgrades] = useState([
        {
            name: "Upgrade 1",
            cost: 10,
            cps: 1,
        },
        {
            name: "Upgrade 2",
            cost: 100,
            cps: 10,
        }
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
            return upgrades.map((upgrade) => {
                return (

                    <h1>
                        {upgrade.name}
                    </h1>

                    )
            })
        }
    }


    return (
        <div className='container bg-foreground-dark drop-shadow-lg'>
            <div className={'flex w-full my-4'}>
                {
                    renderUpgrades()
                }
            </div>
        </div>
    );
}
export default Upgrades;
