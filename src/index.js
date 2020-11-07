import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import Faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = function(){
    return(
        <div className="ui container comments">
            <ApprovalCard>
                <div><b>Warning! Are you sure want to do this?</b></div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Sam" date="Today at 9 AM" content="good comment" avatar={Faker.image.avatar()}/>
            </ApprovalCard> 

            <ApprovalCard> 
                <CommentDetail author="Alex" date="Today at 6 PM" content="well written" avatar={Faker.image.avatar()}/>
            </ApprovalCard>  
            
            <ApprovalCard> 
                <CommentDetail author="Jane" date="Today at 8 PM" content="please adjust contrast" avatar={Faker.image.avatar()}/>
            </ApprovalCard> 
        </div>
    );
};

ReactDOM.render(<App/>,document.querySelector('#root'));

