import Button from "./button"

function Header(){
    return(
        <>
            <div className="font-display text-[#F9F3EF] opacity-85 mt-8 ml-15 absolute">
                <h1 className="font-semibold text-5xl pl-5 mb-1">SwapTix</h1>
                <p className="font-normal text-s">buy or sell tickets from anywhere</p>
            </div>

            <div className="font-header absolute ml-150 mt-12 text-[#D2C1B6] text-2xl flex flex-row gap-x-20">
                <Button bName = "Home" />
                <Button bName = "Events" />
                <Button bName = "Sell" />
            </div>
            
            <div className="font-header absolute text-[#D2C1B6] text-lg top-4 right-12 mt-7 flex flex-row gap-x-10">
                <Button bName = "Register"/>
                <Button bName = "Login"/>
            </div>

        </>
    )
}

export default Header;