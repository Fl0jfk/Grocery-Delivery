import SideMenu from "./SideMenu";

function List(){
    return(
        <div className="container">
            <div className="row">
                <SideMenu/>
                <div className="col-sm">
                    Store
                </div>
            </div>
        </div>
    )
}

export default List;