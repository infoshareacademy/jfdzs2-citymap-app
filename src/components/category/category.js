import React, { PureComponent } from 'react';

class Category extends PureComponent {


    render() {
        return (
            <div>
                <div>
                    <h1>{this.props.title}</h1>
                </div>
            </div>
        );
    }
}

export default Category;
