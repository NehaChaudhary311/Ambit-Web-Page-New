import React from 'react';


export default function App() {
    const heading={
        paddingTop : 100,
        paddingBottom : 20
    };
    return (
        <div className="background-coming-soon" align="center">
            <h1 style={heading}>We are coming very soon</h1>
            <p>Notify me when it's ready</p>
            <div className="input-group-centeralize">
                <div class="input-group mb-3">
                    <input type="text" className ="input_box" placeholder="Write your email"/>
                    <div class="input-group-append">
                        <button class="btn btn-success" type="submit">Go</button>
                    </div>
                </div>
            </div>
        </div>

    );
  }