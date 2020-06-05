import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Graph from './Graph';
/*import Post from './Post'
/*const RevenueGraph = () => null; */

/*export default (props) => (
    <div>
    <h1>{props.data}</h1>
    </div>
); */

const Post = ({ post }) => {
    return  <li>
       {post}
    </li>
    }

class RevenueGraph extends React.Component {
   componentDidMount() {

        fetch('http://localhost:8000/revenue/${userId}')
        .then(res => res.json())
        .then(json=> {
        this.setState ({
            isLoaded: true,
            items:json,
            })
        });

        }

    render() {
         var { isLoaded , items } = this.state;
        if (!isLoaded){
            return <div>Loading...</div>
        }
        else{
        return (
            <div>
                <ul>
                    { items.map(item=> (
                    <li key = {item.userId}>
                    Revenue : {item.revenue}
                    </li>
                    ))};
                </ul>
            </div>
        );
        }
    }
}

export default RevenueGraph
