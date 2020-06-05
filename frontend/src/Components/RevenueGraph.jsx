import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Graph from './Graph';
import Revenue from '../Containers/RevenueGraph'


const App = () => (

    <div>
        <h2> UserId </h2>
        <Revenue/>
        <hr/>
        <h2> Revenue </h2>
    </div>

);



/*class RevenueGraph extends Components

{

    render()

    {
    console.log(this.props)
    const{ revenue } = this.props;
    revenue.map(post => {

    return (

        <div key={post.revenue}>
        {post.userId}
        </div>
    )

    })
    }

}

const mapStateToProps = (state) =>{

return {
    revenue: state.revenue
}
}
*/


export default App;
