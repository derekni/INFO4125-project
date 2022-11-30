import React, { useState } from "react";
import "../css/claimpackage.css";

const ClaimPackage = (props) => {
  const [confirm, setConfirm] = useState(false);
  return props.trigger ? (
    <div className="ClaimPackage">
      <div className="ClaimPackage-inner">
        {!confirm ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <h2>Claim Package</h2>
            <h4>1x Chipotle Bowl</h4>
            <h4>Location: Gates Hall Room G01</h4>
            <h4>Available until: 6:30pm</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <button
                onClick={() => {
                  props.cancel();
                }}
                className="ReturnButton"
              >
                RETURN TO POSTING
              </button>
              <button
                onClick={() => {
                  setConfirm(true);
                }}
                className="ClaimButton"
              >
                CLAIM PACKAGE
              </button>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <h3>You successfully requested Chipotle Bowl from Mariana Lowe</h3>
            <h4>Location: Gates Hall Room G01</h4>
            <h4>Available until: 6:30pm</h4>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <a href="/" className="ReturnButton">
                RETURN TO FEED
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  ) : (
    ""
  );
};

export default ClaimPackage;
