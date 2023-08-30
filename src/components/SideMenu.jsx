function SideMenu (){
    const links = ["Légumes", "Fruits", "Produits Frais", "Épicerie", "Boissons"]
    return(
        <div className="col-sm-2 sidebar">
            <ul> 
                {links.map(link => {
                   return(
                        <li key={link}>{link}</li>
                   )
                })}
            </ul>
        </div>
    )
}

export default SideMenu;