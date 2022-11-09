import Grid from "@mui/material/Grid";
import React from "react";
import {SentCards} from "./requestCards";

export default function SentExchangeRequests(props) {
    return (
        <div>
            <h2 style={{width: "auto", height: "auto", textAlign: "center"}}>Sent Requests</h2>
            <Grid container spacing={5}>
                {Array.from(props.toRequests).map((request, index, arr) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <SentCards
                            key = {index}
                            // name={request}
                            name={request.name}
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
