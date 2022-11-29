import React, { useState } from "react";
import "../css/claimpackage.css";

const ClaimPackage = (props) => {
  const [confirm, setConfirm] = useState(false);
  return props.trigger ? (
    <div className="ClaimPackage">
      <div className="ClaimPackage-inner">
        {confirm ? (
          <>
            <h2>Claim Package</h2>
            <h4>1x Chipotle Bowl</h4>
            <h4>Location: Gates Hall Room G01</h4>
            <h4>Available until: 6:30pm</h4>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <button
                onClick={() => {
                  props.cancel();
                }}
              >
                RETURN TO FEED
              </button>
              <button
                onClick={() => {
                  setConfirm(true);
                }}
              >
                CLAIM PACKAGE
              </button>
            </div>
          </>
        ) : (
          <>
            <div>Claim Package</div>
            <div>1x Chipotle Bowl</div>
            <div>Location: Gates Hall Room G01</div>
            <div>Available until: 6:30pm</div>
            <div>
              <button>RETURN TO FEED</button>
              <button
                onClick={() => {
                  setConfirm(true);
                }}
              >
                CLAIM PACKAGE
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  ) : (
    ""
  );
};

export default ClaimPackage;
