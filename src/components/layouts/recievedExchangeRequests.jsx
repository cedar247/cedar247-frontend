import Grid from "@mui/material/Grid";
import React from "react";
import {RecievedCards} from "./requestCards";

export default function RecievExchangeRequests(props) {
    function handleRefresh(){
        props.refresh()
    }
    return (
        <div>
            <h2 style={{width: "auto", height: "auto", textAlign: "center"}}>Recievd Requests</h2>
            <Grid container spacing={5}>
                {Array.from(props.fromRequests).map((request, index, arr) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <RecievedCards
                            key = {index}
                            // name={request}
                            requestId={request.id}
                            name={request.name}
                            fromDate={request.fromDate}
                            fromShiftName={request.fromShiftName}
                            fromShift={request.fromShift}
                            toDate={request.toDate}
                            toShiftName={request.toShiftName}
                            toShift={request.toShift}
                            status = {request.status}
                            refresh = {handleRefresh}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
