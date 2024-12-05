import InfoCard from "./component/InfoCard";
import Hero from "./Hero";


export default function LandingPage() {
    return (
        <div className="flex flex-col items-center min-w-full pb-96">
            <Hero/>
            <h2 className="py-20 text-3xl">About me</h2>
            <div className="flex flex-row justify-around min-w-full">
                <InfoCard imgSource="src\assets\coding.png" headerText="Programming" text="I' am known programming languages such as Java, Kotlin, HTML, CSS and JavaScript"/>
                <InfoCard imgSource="src\assets\game-console.png" headerText="Hobbies" text="I play guitar and exploring game development"/>
                <InfoCard imgSource="src\assets\weight-lifting.png" headerText="Lifestyle" text="I always spent 2 hours of learning programmin, and 2 hours of dedicated gym, I also do house choires"/>
            </div>
        </div>
    )
}