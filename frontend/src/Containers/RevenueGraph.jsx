import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RevenueGraph from '../Components/RevenueGraph';
import { loadRevenueData } from '../actions/index';
import { reducer } from '../reducers/index';

class Revenue extends Component {

   createListItems()
    {
        return this.props.revenue.map((user) =>
           {
            return (
            <li key= {user.revenue.userId}> {user.revenue.revenue}
            </li>

            );

           });

    }
    render()

    {
    return (
        <ul>
            { this.createListItems() }
        </ul>
    );
    }
}

function mapStateToProps(state) {

    return {

        revenue : state.revenue

    };

}


/*const mapStateToProps = (state) =>({

var { data, userId} = state
data : state.reducer.revenue,
})

const Container = connect(

mapStateToProps,

) (RevenueGraph)

export default Container; */

export default connect (mapStateToProps)(Revenue);

/*export default Revenue; */