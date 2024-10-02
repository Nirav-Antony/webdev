const Footer =() => {
    return(<div className="bg-gradient-to-b from-cyan-300 to-sky-500 py-10">
        <div className="container mx-auto flex justify-center justify-center gap-10 items-center">
            <span className="text-3xl text-white font-bold tracking-tight flex">House Rules</span>
        </div>
        <span className="text-white tracking-tight flex flex 1 justify-center">
                <ul className="cursor-pointer py-4 text-center">
                    <li>rule 1 </li>
                    <li>rule 2 </li>
                    <li>rule 3 </li>
                </ul>
        </span>
    </div>
    );
};

export default Footer;
