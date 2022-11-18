import Grid from "@mui/material/Grid";
import React from "react";
import {ConsultantResponededCards} from "./requestCards";

export default function ConsultantResponededSwapshifts(props) {
    const changeHeader = () =>{
        if(props.Accepted){
            return <h2 style={{width: "auto", height: "auto", textAlign: "center"}}>Accepted Requests</h2>
        }
        else{
            return <h2 style={{width: "auto", height: "auto", textAlign: "center"}}>Rejected Requests</h2>
        }
    }
    return (
        <div>
            {changeHeader()}
            <Grid container spacing={5}>
                {Array.from(props.respondedRequests).map((request, index, arr) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <ConsultantResponededCards
                            key = {index}
                            // name={request}
                            requestId={request.id}
                            fromName={request.fromName}
                            toName={request.toName}
                            fromDate={request.fromDate}
                            fromShiftName={request.fromShiftName}
                            fromShift={request.fromShift}
                            toDate={request.toDate}
                            toShiftName={request.toShiftName}
                            toShift={request.toShift}
                            status = {request.status}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}