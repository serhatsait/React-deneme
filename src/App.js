import React from 'react';
import './App.css';
//import Comment from "./comment";
//import ApprovalCard from "./approvalCard";
//import faker from 'faker';
import DecideSport from "./decideSport";

class App extends React.Component{

    render() {
        return(
            <DecideSport>

            </DecideSport>
        )
    }

    //return (
        // <div className="ui comments" style={{paddingTop: '10px', paddingLeft: '10px'}}>
        //     <ApprovalCard>
        //         <Comment name={'Serhat Sait'}
        //                  text={'Lorem ipsum dolor sit amet'}
        //                  avatar={faker.image.avatar()}
        //         />
        //     </ApprovalCard>
        //
        //     <ApprovalCard>
        //         <Comment name={'Ali Veli'}
        //                  text={'consecteur deliveris'}
        //                  avatar={faker.image.avatar()}
        //         />
        //     </ApprovalCard>
        //     <ApprovalCard>
        //         Hi, ReactJS !!
        //     </ApprovalCard>
        // </div>
    //);
}

export default App;