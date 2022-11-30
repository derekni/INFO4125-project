import React from "react";

const CreateEntry = () => (
  <div className="Content">

    <form>
      <h1 >Create Food Entry</h1>
      <label>
        Food Name:
        <input type="text" name="Food Name" />
      </label>
      <label>
        Dietary Restrictions:
        <div class="checkbox-grid">
          <ul >
            <li><input type="checkbox" name="wheat" value="value1" /><label className="allergy" for="wheat">Wheat</label></li>
            <li><input type="checkbox" name="shellfish" value="value2" /><label className="allergy" for="shellfish">Shellfish</label></li>
            <li><input type="checkbox" name="eggs" value="value3" /><label className="allergy" for="eggs">Eggs</label></li>
            <li><input type="checkbox" name="treenuts" value="value4" /><label className="allergy" for="treenuts">Tree Nuts</label></li>
            <li><input type="checkbox" name="soy" value="value5" /><label className="allergy" for="soy">Soy</label></li>
            <li><input type="checkbox" name="dairy" value="value6" /><label className="allergy" for="dairy">Dairy</label></li>
            <li><input type="checkbox" name="peanuts" value="value7" /><label className="allergy" for="peanuts">Peanuts</label></li>
            <li><input type="checkbox" name="vegetarian" value="value8" /><label className="allergy" for="vegetarian">Vegetarian</label></li>
            <li><input type="checkbox" name="other" value="value8" /><label className="allergy" for="other">Other</label></li>
          </ul>
          <div class="clr"></div>
        </div>
      </label>
      <label>
        Number of Servings/Packages:
        <input type="text" name="Size" />
      </label>
      <label>
        Location:
        <input type="text" name="Location" />
      </label>
      <label>
        Pick up food by:
        <input type="time" name="Dropoff" />
      </label>
      <label>
        Picture:
        <input type="file" name="picture" />
      </label>
      <label>
        Image Description:
        <input type="text" name="Description" />
      </label>
      <a className="ClaimButton" href="\entry4">SUBMIT</a>
    </form>

  </div>
);

export default CreateEntry;