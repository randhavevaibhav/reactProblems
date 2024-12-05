import Container from "../Container/Container";

const Card = ({children})=>{
    return (<>
    <Container tailwindClasses={["rounded-lg", "p-5"]}>
    <div className=" flex flex-col items-center justify-center p-2">
    {children}
    </div>

    </Container>

    </>)
}


Card.Body = ({children})=>{
    return (<>
    <div className="">
        {children}

    </div>
    </>)
}

Card.Title = ({children})=>{
    return(<>
    <div className="w-full flex items-center justify-center font-semibold tracking-wider">
        {children}
    </div>
    
    </>)
}

export default Card;