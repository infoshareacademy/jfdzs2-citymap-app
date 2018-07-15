import React, { PureComponent, Fragment } from "react";
import { Link } from 'react-router-dom';

class FavouriteList extends PureComponent {
    renderFavList = () =>
        this.props.favList.map((item, index) =>
            <div key={index}>{index+1}
                <Link to={"/users/"+item}>
                    {item}
                </Link>
            </div>
        );

    render(){
        return (
            <div className="App-list">
                <h4 className="App-favlist">Lista użytkowników: </h4>
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
