import Head from 'next/head'
import Image from 'next/image'
import {ClickerWindow} from "../components";
import {Upgrades} from "../components";
import {Shop} from "../components";


export default function Clicker() {
  return (
    <div className={"flex justify-center items-center h-screen p-3"}>
        <div className="grid grid-cols-3 w-[90%] h-4/5 h-full rounded">
            <ClickerWindow />
            <Upgrades/>
            <Shop/>
        </div>
    </div>
  )
}
