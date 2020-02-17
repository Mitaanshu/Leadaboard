import React from "react";

export default function ConsentCheckBox({ hasConsent, handleGeneralInfo }) {
  return (
    <div className="margin-y">
      <label htmlFor="hasConsent">Require guardian consent</label>
      <input
        type="checkbox"
        name="hasConsent"
        value={hasConsent}
        onChange={handleGeneralInfo}
      />
    </div>
  );
}
