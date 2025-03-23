import { KnowMore } from "../_components/KnowMore";
import { Beyond } from "./_components/Beyond";
import { Hero } from "./_components/Hero";
import { Medals } from "./_components/Medals";
import { Stake } from "./_components/Stake";

export default function Page(){

    return (
        <main>
            <Hero/>
            <Stake/>
            <Medals/>
            <Beyond/>
            <KnowMore/>
        </main>
    )
}