import Grid from "@mui/material/Grid";
import React from "react";
import {ConsultantRecievedCards} from "./requestCards";

export default function ConsultantRecievedSwapshifts(props) {
    function handleRefresh(){
        props.refresh()
    }
    return (
        <div>
            <h2 style={{width: "auto", height: "auto", textAlign: "center"}}>Recievd Requests</h2>
            <Grid container spacing={5}>
                {Array.from(props.recievedRequests).map((request, index, arr) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <ConsultantRecievedCards
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
                            refresh = {handleRefresh}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
