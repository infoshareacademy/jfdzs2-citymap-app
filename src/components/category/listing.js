import React, from 'react'
import Item from './Item';

export class Listing extends React.Component {
    render() {
        return (
            <div>
                {this.props.places.map(place => {
                    return (
                        <Item place={place}
                              onClick={this.props.onClick}
                              key={place.id} />
                    )
                })}
            </div>
        )
    }
}

export default Listing