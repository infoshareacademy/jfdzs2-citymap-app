import React, { PureComponent } from "react";

class FavouriteList extends PureComponent {
    componentDidMount() {
        console.log(this.props);
    }

    renderFavList = () =>
        this.props.favList.map((item) =>
            <div key={item.id}>{item+1}
            </div>
        );

    render(){
        return (
            <div className="App-list">
                <h4 className="App-favlist">Lista miejsc: </h4>
                <div className="App-lisfOfFav">
                    <ul>
                        {this.renderFavList()}
                    </ul>
                </div>
            </div>
        )
    }
}
export default FavouriteList;
