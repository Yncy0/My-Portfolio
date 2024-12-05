import './index.css'


export default function Hero() {
    return (
        <>
            <div className="bg-ColorTheme1 w-full  p-6 flex flex-row items-center justify-center">
                <div className='flex flex-col gap-4'>
                    <h1 className='text-white font-bold text-8xl'>Hello I'm Yancy!</h1>
                    <p className='text-white font-semibold text-4xl pb-9'>A simple programmer!</p>
                    <button className='bg-white p-3 w-52 rounded-lg text-ColorTheme1 font-semibold'>Let's get started</button>
                </div>
                <img className='max-w-96' src="src\assets\pngwing.com.png" alt="image" />
            </div>
        </>
    )
}