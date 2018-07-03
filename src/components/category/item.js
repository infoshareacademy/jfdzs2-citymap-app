import React, from 'react'

export class Item extends React.Component {
    render() {
        const {place} = this.props;
        return (
            <div>
                <h1>{place.name}</h1>
            </div>
        )
    }
}

export default Item