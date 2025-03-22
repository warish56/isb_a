import { DrivesUs } from "./_components/DrivesUs";
import { Hero } from "./_components/Hero";
import { Impact } from "./_components/Impact";
import { KnowMore } from "./_components/KnowMore";
import { Minds } from "./_components/Minds";

export default function Page(){

    return (
        <main>
            <Hero/>
            <DrivesUs />
            <Minds/>
            <Impact/>
            <KnowMore/>
        </main>
    )
}